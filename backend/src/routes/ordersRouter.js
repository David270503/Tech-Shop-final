import express from 'express'
import { createOrder, getAllOrders } from "../controllers/ordersControllers.js"
export const routerOrder = express.Router()

routerOrder.post('/', createOrder)
routerOrder.get('/', getAllOrders)