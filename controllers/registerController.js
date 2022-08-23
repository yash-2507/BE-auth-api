const User = require("../models/User");

const register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role,
    });

    res.status(200).json({ success: true });
};

module.exports = register;
