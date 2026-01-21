import express from 'express'
import { getAllProducts } from '../controllers/productsControllers.js'
export const routerProduct = express.Router()

routerProduct.get('/', getAllProducts)