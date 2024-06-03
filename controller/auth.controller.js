const jwt = require('jsonwebtoken');
const { User } = require('../models');

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password);
        // const user = await User.create({ username, email, password });
        res.status(201).json(req.body);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !user.validPassword(password)) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { register, login };
