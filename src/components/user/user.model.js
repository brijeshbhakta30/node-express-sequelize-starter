const Sequelize = require('sequelize');
const httpStatus = require('http-status');
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');
const db = require('../../config/db');
const APIError = require('../../helpers/APIError');

/**
 * User Schema
 */
const UserSchema = {
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
};

const User = db.sequelize.define('user', UserSchema);

/**
 * Statics
 */

/**
 * Get user
 * @param {number} id - The id of user.
 * @returns {Promise<User, APIError>}
 */
User.get = function get(id) {
  return this.findById(id)
    .then((user) => {
      if (user) {
        return user;
      }
      const err = new APIError('No such user exists!', httpStatus.NOT_FOUND, true);
      return Promise.reject(err);
    });
};

/**
 * List users in order of 'id'.
 * @param {number} skip - Number of users to be skipped.
 * @param {number} limit - Limit number of users to be returned.
 * @returns {Promise<User[]>}
 */
User.list = function list({ skip = 0, limit = 50 } = {}) {
  return this.findAll({
    limit,
    offset: skip,
    $sort: { id: 1 },
  });
};

User.getByEmail = function getByEmail(email) {
  return this.findOne({
    where: {
      email,
    },
  });
};

/**
 * Methods
 */

/**
 * Generates password for the plain password.
 * @param password
 * @returns {string} - hashed password
 */
User.prototype.generatePassword = function generatePassword(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * Checks if the password matches the hash of password
 * @param password
 * @returns {boolean} - Returns true if password matches.
 */
User.prototype.validPassword = function validPassword(password) {
  return bcrypt.compareSync(password, this.password);
};

/**
 * Generates same model of user details.
 * @returns {object} - Public information of user.
 */
User.prototype.safeModel = function safeModel() {
  return _.omit(this.toJSON(), ['password']);
};

/**
 * @typedef User
 */
module.exports = User;
