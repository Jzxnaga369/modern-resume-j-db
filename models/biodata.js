'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Biodata.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    title: DataTypes.TEXT,
    details: DataTypes.TEXT,
    photos: DataTypes.ARRAY(DataTypes.TEXT),
    points: DataTypes.ARRAY(DataTypes.TEXT)
  }, {
    sequelize,
    modelName: 'Biodata',
  });
  return Biodata;
};