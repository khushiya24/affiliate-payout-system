const { Sale, User, Payout } = require("../models");

exports.processAdvancePayout = async () => {

    const sales = await Sale.findAll({
        where: {
            status: "pending",
            advancePaid: false
        }
    });

    let totalProcessed = 0;

    for (const sale of sales) {

        // Find user
        const user = await User.findByPk(sale.userId);

        if (!user) {
            console.log(`User not found for sale ${sale.id}`);
            continue;
        }

        const advance = sale.earning * 0.10;

        // Create payout record
        await Payout.create({
            userId: sale.userId,
            saleId: sale.id,
            amount: advance,
            type: "ADVANCE",
            status: "SUCCESS"
        });

        // Update sale
        sale.advancePaid = true;
        sale.advanceAmount = advance;
        await sale.save();

        // Update user balance
        user.withdrawableBalance += advance;
        await user.save();

        totalProcessed++;
    }

    return {
        processed: totalProcessed
    };
};