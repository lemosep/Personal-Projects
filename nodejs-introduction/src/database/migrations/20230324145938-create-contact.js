"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("contacts", {
      /**ID */
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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

      /**updated_at */
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      /**foreign key */
      customer_id: {
        type: Sequelize.INTEGER,
        references: { model: "customers", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("contacts");
  },
};
