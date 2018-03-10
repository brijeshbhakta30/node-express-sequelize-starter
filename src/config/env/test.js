import dbConfig from '../dbConfig';

const dbDetails = dbConfig.test;

export default {
  env: 'test',
  jwtSecret: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f',
  jwtExpiresIn: '24h',
  db: {
    host: dbDetails.host,
    username: dbDetails.username,
    password: dbDetails.password,
    database: dbDetails.database,
  },
  port: 4044,
};
