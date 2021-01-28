'use strict';
const { hashText } = require('../helpers/bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      name: 'Admin',
      user_name: 'AdminFoxy',
      email: 'admin@mail.com',
      password: hashText('admin'),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'foxy',
        user_name: 'foxyGans',
        email: 'foxy@mail.com',
        password: hashText('foxy'),
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date()
        }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
