import prisma from "../prismaClient.js"

export const getAllProductService = async () => {
    const products =  await prisma.product.findMany()
    return products
}