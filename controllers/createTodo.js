const User = require('../models/User');

const createTodo = async (req, res) => {
    const { email, todo } = req.body;
    await User.updateOne({ email }, { $push: { todo: todo } });
    res.status(200).json({ message: 'Success' });
};

module.exports = createTodo;