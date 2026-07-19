const express = require("express");

const router = express.Router();

const userController = require("../controllers/userController");
const saleController = require("../controllers/saleController");

// USER APIs
router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

// SALE APIs
router.post("/sales", saleController.createSale);
router.get("/sales", saleController.getSales);

router.delete("/sales/:id", saleController.deleteSale);

module.exports = router;