const {DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    operatorsAliases: false
    
});

module.exports = sequelize;