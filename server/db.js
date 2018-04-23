const {DATABASE_URL} = process.env;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(DATABASE_URL, {
    ssl: true,
    dialect: 'postgres',
    operatorsAliases: false
    
});

module.exports = sequelize;