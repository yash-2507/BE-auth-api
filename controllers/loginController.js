const User = require("../models/User");

const login = async (req, res) => {
    const { email, password } = req.body;

    // Validate the request
    if (!email || !password) {
        return res
            .status(400)
            .json({ message: "Please provide email and password" });
    }
    // Check for credentials
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return res.sendStatus(401); //unauthorized
    }
    // Match password and hashed password
    const match = await user.matchPassword(password);
    if (!match) {
        return res.sendStatus(401); //wrong credentials
    }
    // create token
    const token = user.getJwtToken();

    const option = {
        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    res.status(200)
        .cookie("token", token, option)
        .json({ success: true, token, email });
};

module.exports = login;
