const jwt = require('jsonwebtoken');
const User = require("../models/User");
require("dotenv").config();

exports.verifyJwt = async (req, res, next) => {
    let token = req.headers.authorization;
    if(!token) {
        return res.sendStatus(401);
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        console.log(err.message);
    }
}