const { Sale, User } = require("../models");

// Create Sale
exports.createSale = async (req, res) => {
    try {

        const { userId, brand, earning } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const sale = await Sale.create({
    userId: userId,
    brand,
    earning
});

        res.status(201).json({
            message: "Sale created successfully",
            sale
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }
};

// Get All Sales
exports.getSales = async (req, res) => {

    try {

        const sales = await Sale.findAll({
            include: User
        });

        res.status(200).json(sales);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};

exports.deleteSale = async (req, res) => {

    await Sale.destroy({
        where: {
            id: req.params.id
        }
    });

    res.json({
        message: "Sale deleted"
    });

};