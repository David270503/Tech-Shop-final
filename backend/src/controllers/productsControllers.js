import { getAllOrdersService } from "../services/ordersService.js"
import { getAllProductService } from "../services/productsService.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductService()
        res.json(products)
    } catch (error) {
        res.status(404)
        console.error("Ereur lors de l'affichage e produits");
    }
}