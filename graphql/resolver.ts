import prismaClient from '../lib/prisma'

const products = [
    { id: 1, title: "Product 1", price: 100, categoryId: 1, image: "image1.png" },
    { id: 2, title: "Product 2", price: 200, categoryId: 2, image: "image2.png" },
    // other products
];

export const resolvers = {
    Query: {
        entries(_: any, args: any, context: any) {
            const entries = prismaClient.products.findMany({})
            console.log(products)
            return entries || []
        }
    }
}
export default resolvers