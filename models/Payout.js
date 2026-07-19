const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payout = sequelize.define("Payout", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    saleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    type: {
        type: DataTypes.ENUM(
            "ADVANCE",
            "FINAL",
            "ADJUSTMENT"
        ),
        allowNull: false
    },

    status: {
        type: DataTypes.ENUM(
            "SUCCESS",
            "FAILED",
            "PENDING",
            "CANCELLED"
        ),
        defaultValue: "PENDING"
    }

});

module.exports = Payout;