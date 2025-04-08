'use strict';
const biodata = [
  {
    name: "Andreas Juan Sanjaya",
    email: "andreasjuansanjaya@gmail.com",
    phonenumber: "087878733288",
    title: "",
    details: "",
    photos: ["","",""],
    points: "",
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Biodata', biodata, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Biodata', null, {});
  }
};