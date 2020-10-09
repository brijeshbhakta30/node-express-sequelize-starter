// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();
const config = require('./config');
const server = require('./server');

// eslint-disable-next-line import/order
const debug = require('debug')('node-server:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

server.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});

module.exports = server;
