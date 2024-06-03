const { Transaksi } = require('../models');

// Get all Transaksi
const getAllTransaksi = async (req, res) => {
    try {
        const transaksi = await Transaksi.findAll();
        res.json(transaksi);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new Transaksi
const createTransaksi = async (req, res) => {
    try {
        const {id, jenis, jumlah, tanggal, keterangan } = req.body;
        const newTransaksi = await Transaksi.create({ id, jenis, jumlah, tanggal, keterangan });
        res.status(201).json({ message: "Transaksi sukses", newTransaksi });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllTransaksi,
    createTransaksi
};
