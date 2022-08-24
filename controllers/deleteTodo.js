const User = require('../models/User');

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const user = await User.findOne({ email });
    let todos = user.todo;
    todos.map((el) => {
        if (el._id == id) {
            el.deleted = true;
        }
        return el;
    });
    await User.updateOne({ email }, { todo: todos });
    res.status(200).json({ success: true });
};

module.exports = deleteTodo;
