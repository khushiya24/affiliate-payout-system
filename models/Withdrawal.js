const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Withdrawal = sequelize.define("Withdrawal", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM(
            "PENDING",
            "SUCCESS",
            "FAILED",
            "REJECTED",
            "CANCELLED"
        ),
        defaultValue: "PENDING"
    }

});

module.exports = Withdrawal;