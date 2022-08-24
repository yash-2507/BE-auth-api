const User = require('../models/User');

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { email, tagname, status, tag } = req.body;
    const user = await User.findOne({ email });
    let todo = user.todo;
    todo.map((el) => {
        if (el._id == id) {
            el.tagname = tagname;
            (el.status = status), (el.tag = tag);
        }
        return el;
    });
    await User.updateMany({ email }, { todo: todo });
    res.status(200).json({ success: true, message: 'Todo updated' });
};

module.exports = updateTodo;