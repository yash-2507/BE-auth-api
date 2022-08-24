const createTodo = require('../controllers/createTodo');
const getById = require('../controllers/getById');
const getTodo = require('../controllers/getTodos');
const router = require('express').Router();

router.get('/', getTodo);
router.post('/create', createTodo);
router.get('/:id', getById);

module.exports = router;
