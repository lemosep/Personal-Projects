"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("customers", {
      /**ID */
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      /**Name */
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      /**Email */
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      /**Created_at */
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      /**Updated_at */
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("customers");
  },
};
