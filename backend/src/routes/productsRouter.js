import express from 'express'
import { getAllProducts } from '../controllers/productsControllers.js'
export const routerProducts = express.Router()

routerProducts.get('/', getAllProducts)