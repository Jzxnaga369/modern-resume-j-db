'use strict';

const educations = [
  {
    logoimg:"",
    educationname:"",
    monthfrom:3,
    yearfrom: 2017,
    monthto:3,
    yearto: 2017,
    title: "Lorem ipsum 01",
    detail: "Lorem ipsum dolor sit amet",
    points: ["point1","point2","point3","point4","point5"],
    photoimgs: ["point1","point2","point3","point4","point5"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"",
    educationname:"",
    monthfrom:3,
    yearfrom: 2017,
    monthto:3,
    yearto: 2017,
    title: "Lorem ipsum 01",
    detail: "Lorem ipsum dolor sit amet",
    points: ["point1","point2","point3","point4","point5"],
    photoimgs: ["point1","point2","point3","point4","point5"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"",
    educationname:"",
    monthfrom:3,
    yearfrom: 2017,
    monthto:3,
    yearto: 2017,
    title: "Lorem ipsum 01",
    detail: "Lorem ipsum dolor sit amet",
    points: ["point1","point2","point3","point4","point5"],
    photoimgs: ["point1","point2","point3","point4","point5"],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    logoimg:"",
    educationname:"",
    monthfrom:3,
    yearfrom: 2017,
    monthto:3,
    yearto: 2017,
    title: "Lorem ipsum 01",
    detail: "Lorem ipsum dolor sit amet",
    points: ["point1","point2","point3","point4","point5"],
    photoimgs: ["point1","point2","point3","point4","point5"],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Educations', educations, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Educations', null, {});
  }
};
