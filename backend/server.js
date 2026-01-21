import express from 'express'
import cors from 'cors'
import { routerProduct } from './src/routes/productsRouter.js'
import { routerOrder } from './src/routes/ordersRouter.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/products', routerProduct)
app.use('/api/orders', routerOrder)

app.listen(3001, () => {
    console.log('Serveur lancé sur le port 3001')
})