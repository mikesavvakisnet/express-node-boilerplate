const todoStore = require('./todo.store');

const { ErrorHandler } = require('../../helpers/errorManagement');

const createNewTodo = async (todoTitle, todoText) => {
  // User specific permissions check goes here or in todo.routes as middleware.

  try {
    await todoStore.insertNewTodo(todoTitle, todoText);
  } catch (error) {
    // TODO: Move static string to specific file with multilanguage support
    throw new ErrorHandler(500, 'Database Error: Sorry, Something went wrong with the database. Please try again later.', error);
  }
};

module.exports = {
  createNewTodo,
};
