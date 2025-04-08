'use strict';
const accountdetails = [
  {
    name:"Juan",
    lastname:"Sanjaya",
    birthdate:'1994-11-22',
    company:"superadminyourmakerprotocol",
    phonenumber:"087878733288",
    email:"andreasjuansanjaya@gmail.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accountdetails', accountdetails, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accountdetails', null, {});
  }
};