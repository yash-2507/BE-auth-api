const createTodo = require('../controllers/createTodo');
const deleteTodo = require('../controllers/deleteTodo');
const getById = require('../controllers/getById');
const getTodo = require('../controllers/getTodos');
const updateTodo = require('../controllers/updateTodo');
const router = require('express').Router();

router.get('/', getTodo);
router.post('/create', createTodo);
router.get('/:Todoid', getById);
router.post('/delete/:Todoid', deleteTodo);
router.post('/edit/:Todoid', updateTodo);

module.exports = router;
