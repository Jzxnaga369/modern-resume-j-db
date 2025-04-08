'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Skill.init({
    logoimg: DataTypes.STRING,
    skillname: DataTypes.STRING,
    monthfrom: DataTypes.INTEGER,
    monthto: DataTypes.INTEGER,
    yearfrom: DataTypes.INTEGER,
    yearto: DataTypes.INTEGER,
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
    points: DataTypes.ARRAY(DataTypes.STRING),
    photoimgs: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};