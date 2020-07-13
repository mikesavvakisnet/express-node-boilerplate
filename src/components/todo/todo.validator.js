const Ajv = require('ajv');

const ajv = new Ajv();

const validateCreateNewTodo = ajv.compile(require('./schema/createNewTodoSchema.json'));

const validateCreateNewTodoRequest = (requestData) => validateCreateNewTodo(requestData);

module.exports = { validateCreateNewTodoRequest };
