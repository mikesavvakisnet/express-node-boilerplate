const todoRoutes = require('./todo/todo.routes');

module.exports = (app) => {
  app.use('/api/v1/todo', todoRoutes);

  return app;
};
