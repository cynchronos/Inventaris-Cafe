const express = require('express');
const { register, login } = require('../controller/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/', login);

router.get('/register', (req,res) => {
    res.sendFile('register.html', {root: 'C:/projects/Inventaris-Cafe/views/'})
})

router.get('/', (req,res) => {
    res.sendFile('login.html', {root: 'C:/projects/Inventaris-Cafe/views/'})
})


module.exports = router;
