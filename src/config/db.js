const Sequelize = require('sequelize');
const debug = require('debug')('node-server:db');
const config = require('./index');

const { db: dbDetails } = config;
const sequelize = new Sequelize(dbDetails.database, dbDetails.username, dbDetails.password, {
  host: dbDetails.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    debug('Connection has been established successfully.');
  })
  .catch((err) => {
    debug('Unable to connect to the database:', err);
  });

module.exports = { sequelize };
