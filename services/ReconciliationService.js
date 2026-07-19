const { Sale, User, Payout } = require("../models");

exports.reconcileSale = async (saleId, newStatus) => {

    const sale = await Sale.findByPk(saleId);

    if (!sale)
        throw new Error("Sale not found");

    if (sale.reconciled)
        throw new Error("Sale already reconciled");

    const user = await User.findByPk(sale.userId);

    let payoutAmount = 0;
    let payoutType = "FINAL";

    if (newStatus === "approved") {

        payoutAmount = sale.earning - sale.advanceAmount;

        user.withdrawableBalance += payoutAmount;

    } else if (newStatus === "rejected") {

        payoutAmount = -sale.advanceAmount;

        payoutType = "ADJUSTMENT";

        user.withdrawableBalance += payoutAmount;

    } else {

        throw new Error("Invalid status");
    }

    await user.save();

    await Payout.create({
        userId: sale.userId,
        saleId: sale.id,
        amount: payoutAmount,
        type: payoutType,
        status: "SUCCESS"
    });

    sale.status = newStatus;
    sale.reconciled = true;

    await sale.save();

    return sale;
};