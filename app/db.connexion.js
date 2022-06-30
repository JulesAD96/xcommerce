//Setup connexion to postgres db
const { Sequelize } = require('sequelize');
const DB = require('../config/db.config');

const connection = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, {
    'host': DB.HOST,
    'dialect': 'postgres',
})


module.exports = connection;