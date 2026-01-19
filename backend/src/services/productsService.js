import prisma from "../prismaClient.js"

export const getAllProductService = async () => {
    const products =  await prisma.products.findMany()
    return products
}