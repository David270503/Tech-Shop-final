const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
const pool = require('./src/config/db.js')

app.get('/api/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products')
        res.json(result.rows)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur serveur' })
    }
})

app.listen(3000, () => {
    console.log('Serveur lancé sur le port 3000');
})