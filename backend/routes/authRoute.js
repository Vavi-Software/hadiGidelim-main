const express = require('express');
const User = require('../models/User');
const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// User Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
