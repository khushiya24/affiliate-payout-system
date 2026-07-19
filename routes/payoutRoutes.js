const express = require("express");
const router = express.Router();

const payoutController = require("../controllers/payoutController");

router.post("/advance/run", payoutController.runAdvance);

router.patch("/sales/:id/reconcile", payoutController.reconcile);

router.get("/payouts", payoutController.getPayouts);

module.exports = router;