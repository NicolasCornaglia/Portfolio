const {DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT, DB_DIALECT} = require('../../configDB.js');

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT,
    "allowPublicKeyRetrieval": true
  },
  "test": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT,
    "allowPublicKeyRetrieval": true
  },
  "production": {
    "username": DB_USER,
    "password": DB_PASSWORD,
    "database": DB_NAME,
    "host": DB_HOST,
    "port": DB_PORT,
    "dialect": DB_DIALECT,
    "allowPublicKeyRetrieval": true
  }
}
