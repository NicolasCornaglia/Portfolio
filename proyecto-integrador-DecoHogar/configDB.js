const PORT = process.env.PORT || 3001;
const DB_HOST = process.env.DB_HOST || "127.0.0.1";
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || null;
const DB_NAME = process.env.DB_NAME || 'deco_hogar';
const DB_PORT = process.env.DB_PORT || 3306;
const DB_DIALECT = process.env.DB_DIALECT || 'mariadb';

module.exports = {PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, DB_DIALECT};