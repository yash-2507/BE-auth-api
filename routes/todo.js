const createTodo = require('../controllers/createTodo');
const deleteTodo = require('../controllers/deleteTodo');
const getById = require('../controllers/getById');
const getTodo = require('../controllers/getTodos');
const updateTodo = require('../controllers/updateTodo');
const router = require('express').Router();

router.get('/', getTodo);
router.post('/create', createTodo);
router.get('/:id', getById);
router.post('/delete/:id', deleteTodo)
router.post('/edit/:id', updateTodo)

module.exports = router;
