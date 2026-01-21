import express from 'express'
export const routerOrder = express.Router()
import { createOrder } from "../controllers/ordersControllers.js"

routerOrder.post('/', createOrder)