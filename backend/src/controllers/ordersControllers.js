import { createOrderInDb } from "../services/ordersService.js"

export const createOrder = async (req, res) => {
    try {
        const { user, items, total } = req.body
        const newOrder = await createOrderInDb(user, total)
        res.status(201).json({
            sucess: true,
            orderNumber: newOrder.orderNumber,
            message: "Commande validée avec succés !"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            sucess: false,
            message: "Erreur dans la creation de commande"
        })
    }
}