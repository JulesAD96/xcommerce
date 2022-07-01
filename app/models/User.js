const {Sequelize, DataTypes, Model}  = require('sequelize');

const sequelize = require('../db.connexion');

class User extends Model {};

//Adding fields to sequelize models
User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull:false,
        unique:true,
        validate: {
            isEmail:true
        },
    },
    phone: {
        type:DataTypes.STRING(20),
        allowNull:true,
        unique:true,
    },
    address: {
        type:DataTypes.STRING(100),
        allowNull:true,
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false,
    }
    
}, 
    {
        sequelize,
        modelName:'User',
        tableName:'users',
    }
)


module.exports = User;