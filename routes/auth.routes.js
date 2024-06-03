const express = require('express');
const { register, login } = require('../controller/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/', login);

router.get('/register', (req,res) => {
    res.render('register');
})

router.get('/', (req,res) => {
    res.sendFile('login.html')
})


module.exports = router;
