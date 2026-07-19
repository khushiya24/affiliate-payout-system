const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Sale = sequelize.define("Sale", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },

    earning: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM("pending", "approved", "rejected"),
        defaultValue: "pending"
    },

    advancePaid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    advanceAmount: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },

    reconciled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

});

module.exports = Sale;