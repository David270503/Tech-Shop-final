import { getAllProductService } from "../services/productsService.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await getAllProductService()
        res.json(products)
    } catch  {
        res.status(404)
    }
}