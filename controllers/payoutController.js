const AdvancePayoutService = require("../services/AdvancePayoutService");
const ReconciliationService = require("../services/ReconciliationService");

exports.runAdvance = async (req, res) => {

    const result = await AdvancePayoutService.processAdvancePayout();

    res.json({
        message: "Advance payout completed",
        result
    });

};

exports.reconcile = async (req, res) => {

    try {

        const sale = await ReconciliationService.reconcileSale(
            req.params.id,
            req.body.status
        );

        res.json({
            message: "Sale reconciled",
            sale
        });

    } catch (err) {

        res.status(400).json({
            error: err.message
        });

    }

};

exports.getPayouts = async (req,res)=>{
    const { Payout } = require("../models");

    const payouts = await Payout.findAll();

    res.json(payouts);
};