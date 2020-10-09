const { db } = require('.');

module.exports = {
  development: db,
  production: db,
  test: db,
};
