const { User } = require("../models");

exports.createUser = async (req, res) => {
    try {
        const user = await User.create({
            username: req.body.username
        });

        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

exports.getUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};