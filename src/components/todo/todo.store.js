// eslint-disable-next-line no-unused-vars
const { db, pgp } = require('../../databases/postgresql');

const insertNewTodo = (todoTitle, todoText) => db.none('INSERT INTO todos(title, body) VALUES($1, $2)', [todoTitle, todoText]);

module.exports = {
  insertNewTodo,
};
