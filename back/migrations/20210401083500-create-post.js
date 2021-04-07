'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      imageUrl: {
        allowNull: true,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      video: {
        allowNull: true,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      lienGithub: {
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      date:{
        allowNull: false,
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        onDelete: 'CASCADE',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        onDelete: 'CASCADE',
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};