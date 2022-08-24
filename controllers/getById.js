const User = require('../models/User');

const getById = async (req, res) => {
    const { id } = req.user;
    const { Todoid } = req.params;

    const user = await User.findById(id);
    const todos = user.todo;
    let getTodo = todos.filter((e) => e._id == Todoid);
    res.status(200).json({ getTodo, success: true });
};

module.exports = getById;
