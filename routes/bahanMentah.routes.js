const express = require('express');
const { getAllBahanMentah, createBahanMentah } = require('../controller/bahanMentah.controller');

const router = express.Router();

// GET all BahanMentah
router.get('/', getAllBahanMentah);

// POST a new BahanMentah
router.post('/', createBahanMentah);

module.exports = router;
