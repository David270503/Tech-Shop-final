import express from 'express'
import cors from 'cors'
import { routerProducts } from './src/routes/productsRouter.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/products', routerProducts)

app.listen(3001, () => {
    console.log('Serveur lancé sur le port 3001');
})