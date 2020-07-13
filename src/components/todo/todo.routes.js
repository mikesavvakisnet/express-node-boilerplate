const express = require('express');

const router = express.Router();

const todoMiddleware = require('./todo.middleware');
const todoController = require('./todo.controller');

// body -> todoTitle,todoText
// TODO: Authentication/Authorization specific route goes here
router.post('/', todoMiddleware.validateCreateNewTodoRequest, todoController.createNewTodoHandler);

module.exports = router;
