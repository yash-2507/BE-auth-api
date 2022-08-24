const User = require('../models/User');

const createTodo = async (req, res) => {
    const { todo } = req.body;
    const { id } = req.user;
    await User.updateOne({ _id: id }, { $push: { todo: todo } });
    res.status(200).json({ message: 'Success' });
};

module.exports = createTodo;
