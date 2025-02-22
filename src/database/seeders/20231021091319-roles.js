"use strict";

const rolesJSON = require('../../data/roles.json')
const roles = rolesJSON.map(rol => {
  return {
    name : rol,
    createdAt : new Date,
    updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", roles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
