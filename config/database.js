const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cafe_inventory1', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
