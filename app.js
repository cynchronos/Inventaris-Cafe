const express = require('express');
const bahanMentahRoutes = require('./routes/bahanMentah.routes');
const transaksiRoutes = require('./routes/transaksi.routes');
const authRoutes = require('./routes/auth.routes');
const authenticateJWT = require('./middleware/auth.middleware');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3306;
const host = process.env.HOST || 'localhost';

const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', authRoutes);
app.use('/bahan_mentah', authenticateJWT, bahanMentahRoutes);
app.use('/transaksi', authenticateJWT, transaksiRoutes);


app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});