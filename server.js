const express = require("express");
const sequelize = require("./config/database");
const payoutRoutes = require("./routes/payoutRoutes");

require("./models");

const app = express();

app.use(express.json());
const saleRoutes = require("./routes/saleRoutes");
app.use("/api", saleRoutes);
app.use("/api", payoutRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Affiliate Payout System API Running 🚀"
    });
});

sequelize.sync({ force: true })
.then(() => {

    console.log("✅ Database Connected");

    app.listen(3000, () => {
        console.log("🚀 Server running on http://localhost:3000");
    });

})
.catch(err => {
    console.log(err);
});