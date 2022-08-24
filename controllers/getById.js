const User = require('../models/User');

const getById = async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;

    const user = await User.findOne({ email });
    const todos = user.todo;
    let getTodo = todos.filter((e) => e._id == id);
    res.status(200).json({ getTodo, success: true });
};

module.exports = getById;
