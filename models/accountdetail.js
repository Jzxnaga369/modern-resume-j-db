'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accountdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Accountdetail.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    company: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Accountdetail',
  });
  return Accountdetail;
};