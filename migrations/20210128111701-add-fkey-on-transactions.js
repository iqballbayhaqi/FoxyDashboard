'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return Promise.all([
    queryInterface.addConstraint('Transactions', {
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
    queryInterface.addConstraint('Transactions', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_UserId',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
   ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint('Transactions', 'custom_fkey_constraint_ProductId'),
      queryInterface.removeConstraint('Transactions', 'custom_fkey_constraint_UserId'),
    ])
  }
};
