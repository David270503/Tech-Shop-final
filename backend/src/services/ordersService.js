import prisma from '../prismaClient.js'

export const createOrderInDb = async (userData, totalAmount) => {
    const orderNumber = `CMD-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    const newOrder = await prisma.order.create({
        data: {
            orderNumber: orderNumber,
            totalPrice: parseFloat(totalAmount),
            user: {
                connectOrCreate: {
                    where: { email: userData.email },
                    create: {
                        email: userData.email,
                        name: userData.name,
                        address: userData.address,
                        phone: userData.phone
                    }
                }
            }
        }
    })
    return newOrder
}

export const getAllOrdersService = async () => {
    const orders = await prisma.order.findMany()
    return orders
}