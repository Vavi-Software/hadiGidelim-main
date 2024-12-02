const express = require("express");
const Business = require("../models/Business");

const router = express.Router();

// Yeni işletme ekle
router.post("/", async (req, res) => {
    const { businessType, businessName, price, image } = req.body;
    try {
        const newBusiness = await Business.create({ businessType, businessName, price, image });
        res.status(201).json(newBusiness);
    } catch (error) {
        res.status(500).json({ message: "İşletme kaydedilemedi!", error: error.message });
    }
});

// Tüm işletmeleri listele
router.get("/", async (req, res) => {
    try {
        const businesses = await Business.findAll();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(500).json({ message: "İşletmeler getirilemedi!", error: error.message });
    }
});

module.exports = router;
