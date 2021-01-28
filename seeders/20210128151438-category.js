'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
       name: 'Sepatu',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Aksesoris',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kemeja',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hoodie',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Celana',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
