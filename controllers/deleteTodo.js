const User = require('../models/User');

const deleteTodo = async (req, res) => {
    const { Todoid } = req.params;
    const {id} = req.user;
    const user = await User.findById(id);
    let todos = user.todo;
    todos.map((el) => {
        if (el._id == Todoid) {
            el.deleted = true;
        }
        return el;
    });
    await User.updateOne({_id: id}, { todo: todos });
    res.status(200).json({ success: true });
};

module.exports = deleteTodo;
