'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addConstraint('ProductCategories', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_ProductId',
      references: { //Required field
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('ProductCategories', {
      fields: ['CategoryId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_CategoryId',
      references: { //Required field
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
   ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('ProductCategories', 'custom_fkey_constraint_ProductId'),
      queryInterface.removeConstraint('ProductCategories', 'custom_fkey_constraint_CategoryId'),
    ])
  }
};
