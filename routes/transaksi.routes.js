const express = require('express');
const { getAllTransaksi, createTransaksi } = require('../controller/transaksi.controller');

const router = express.Router();

// GET all Transaksi
router.get('/', getAllTransaksi);

// POST a new Transaksi
router.post('/', createTransaksi);

module.exports = router;
