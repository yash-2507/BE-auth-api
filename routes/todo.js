const createTodo = require('../controllers/createTodo');
const getById = require('../controllers/getById');
const getTodo = require('../controllers/getTodos');
const { verifyJwt } = require('../middleware/auth');
const router = require('express').Router();

router.get('/', verifyJwt, getTodo);
router.post('/create', verifyJwt, createTodo);
router.get('/:id', verifyJwt, getById);

module.exports = router;
