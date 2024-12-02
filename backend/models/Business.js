const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Business = sequelize.define("Business", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    businessType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    businessName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Business;
