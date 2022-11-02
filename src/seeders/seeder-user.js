"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // email: DataTypes.STRING,
    //   password: DataTypes.STRING,
    //   firstName: DataTypes.STRING,
    //   lastName: DataTypes.STRING,
    //   address: DataTypes.STRING,
    //   phoneNumber: DataTypes.STRING,
    //   gender: DataTypes.BOOLEAN,
    //   image: DataTypes.STRING,
    //   roleId: DataTypes.STRING,
    //   positionId: DataTypes.STRING,
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456",
        firstName: "thienkiempro1",
        lastName: "",
        address: "vietnam",
        gender: 1,
        phoneNumber: "0123456",
        image: "",
        roleId: "admin",
        positionId: "cc",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
