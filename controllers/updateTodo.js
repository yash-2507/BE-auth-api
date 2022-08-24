const User = require('../models/User');

const updateTodo = async (req, res) => {
    const { Todoid } = req.params;
    const { tagname, status, tag } = req.body;
    const {id} = req.user;
    const user = await User.findById(id);
    let todo = user.todo;
    todo.map((el) => {
        if (el._id == Todoid) {
            el.tagname = tagname;
            (el.status = status), (el.tag = tag);
        }
        return el;
    });
    await User.updateOne({ _id: id }, { todo: todo });
    res.status(200).json({ success: true, message: 'Todo updated' });
};

module.exports = updateTodo;