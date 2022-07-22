'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      }, 
    name: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull:false,
        unique:true,
        validate: {
            isEmail:true
        },
    },
    phone: {
        type:Sequelize.STRING(20),
        allowNull:true,
        unique:true,
    },
    address: {
        type:Sequelize.STRING(100),
        allowNull:true,
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false,
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};