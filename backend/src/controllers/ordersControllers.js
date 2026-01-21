import { createOrderInDb, getAllOrdersService } from "../services/ordersService.js"

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

export const getAllOrders = async (req, res) => {
    try {
        const orders = await getAllOrdersService()
        res.json(orders)
    } catch (error) {
        res.status(500)
        console.error("Erreur lors de l'affichage des commandes");
    }
}