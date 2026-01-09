require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// --- DATABASE CONNECTION (Ab active hai) ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Database Connected Successfully!");
    })
    .catch((err) => {
        console.log("Connection Failed:", err);
    });

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to CG-Projects API" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});