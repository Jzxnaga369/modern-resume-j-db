'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      logoimg:{
        type: Sequelize.STRING
      },
      skillname:{
        type: Sequelize.STRING
      },
      monthfrom: {
        type: Sequelize.INTEGER
      },
      yearfrom: {
        type: Sequelize.INTEGER
      },
      monthto: {
        type: Sequelize.INTEGER
      },
      yearto: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.TEXT,
      },
      points: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      photoimgs:{
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    await queryInterface.dropTable('Skills');
  }
};