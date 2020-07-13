const { ErrorHandler } = require('../../helpers/errorManagement');

const todoValidator = require('./todo.validator');

const validateCreateNewTodoRequest = (req, res, next) => {
  if (!todoValidator.validateCreateNewTodoRequest(req.body)) {
    // TODO: Move static string to specific file with multilanguage support
    return next(new ErrorHandler(400, 'Your request body is wrong.'));
  }

  return next();
};

module.exports = {
  validateCreateNewTodoRequest,
};
