const todoService = require('./todo.service');

const responseHelper = require('../../helpers/responseManagement');

const createNewTodoHandler = async (req, res, next) => {
  const { todoTitle, todoText } = req.body;
  try {
    await todoService.createNewTodo(todoTitle, todoText);
    // TODO: Move static string to specific file with multilanguage support
    return responseHelper.sendResponse(res, 201, { message: 'Todo created.' });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createNewTodoHandler,
};
