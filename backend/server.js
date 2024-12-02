const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB, sequelize } = require("./config/db"); // sequelize'yi buradan içe aktarıyoruz
const businessRoutes = require("./routes/businessRoutes");

dotenv.config();
connectDB(); // Veritabanına bağlan

// Modeli senkronize et
sequelize.sync({ alter: true })
    .then(() => console.log("Veritabanı senkronize edildi!"))
    .catch((err) => console.error("Senkronizasyon hatası:", err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/businesses", businessRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
