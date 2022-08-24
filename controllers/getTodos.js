const User = require('../models/User');

const getTodo = async (req, res) => {
    const { status } = req.query;
    const { id } = req.user;
    const user = await User.findById(id);
    const todo = user.todo;
    if (status === undefined) {
        return res.status(200).json({ success: true, todo });
    } else {
        let filtered = todo.filter((e) => e.status === status);
        return res.status(200).json({ success: true, filtered });
    }
};

module.exports = getTodo;
