'use strict';

const numberSeparator = require('../helpers/numberSeparator')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.User, { through: models.Transaction})
      Product.belongsToMany(models.Category, { through: models.ProductCategory})
    }

  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    images: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};