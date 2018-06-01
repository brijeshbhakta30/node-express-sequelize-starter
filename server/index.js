// config should be imported before importing any other file
const config = require('./config');
const server = require('./server');

const debug = require('debug')('node-server:index');

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

server.listen(config.port, () => {
  debug(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});

module.exports = server;
