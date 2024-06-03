const { BahanMentah } = require('../models');

// Get all BahanMentah
const getAllBahanMentah = async (req, res) => {
    try {
        const bahanMentah = await BahanMentah.findAll();
        res.json(bahanMentah);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new BahanMentah
const createBahanMentah = async (req, res) => {
    try {
        const { nama, kategori, stok, satuan } = req.body;
        const newBahanMentah = await BahanMentah.create({ nama, kategori, stok, satuan });
        res.status(201).json(newBahanMentah);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllBahanMentah,
    createBahanMentah
};
