import config from './config/env';
import app from './config/express';

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.log(`server started on port ${config.port} (${config.env})`);
  });
}

export default app;
