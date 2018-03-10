import Sequelize from 'sequelize';
import config from './env';

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
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default { sequelize };
