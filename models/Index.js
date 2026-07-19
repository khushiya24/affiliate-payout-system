const User = require("./User");
const Sale = require("./Sale");
const Payout = require("./Payout");
const Withdrawal = require("./Withdrawal");

// User -> Sales
User.hasMany(Sale, {
    foreignKey: "userId"
});

Sale.belongsTo(User, {
    foreignKey: "userId"
});

// User -> Payouts
User.hasMany(Payout, {
    foreignKey: "userId"
});

Payout.belongsTo(User, {
    foreignKey: "userId"
});

// Sale -> Payouts
Sale.hasMany(Payout, {
    foreignKey: "saleId"
});

Payout.belongsTo(Sale, {
    foreignKey: "saleId"
});

// User -> Withdrawals
User.hasMany(Withdrawal, {
    foreignKey: "userId"
});

Withdrawal.belongsTo(User, {
    foreignKey: "userId"
});

module.exports = {
    User,
    Sale,
    Payout,
    Withdrawal
};