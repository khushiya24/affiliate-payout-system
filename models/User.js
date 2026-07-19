const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    withdrawableBalance: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    },

    lastWithdrawalAt: {
        type: DataTypes.DATE,
        allowNull: true
    }

});

module.exports = User;