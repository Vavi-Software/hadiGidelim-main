const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_DATABASE, process.env.PG_USER, process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: "postgres",
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("PostgreSQL bağlantısı başarılı!");
    } catch (error) {
        console.error("PostgreSQL bağlantı hatası:", error.message);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
