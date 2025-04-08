// relational-queries.ts

import { prisma } from "./utils/utils"


const relationalQueries = async () => {
    // fluent api
    // const result = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 2
    //     }
    // }).post()
    // console.log(result)



    // include/populate for mongoose api
    // const result = await prisma.user.findUniqueOrThrow({
    //     where: {
    //         id: 2
    //     },
    //     include: {
    //         post: true
    //     }
    // })
    // console.log(result)


    // Relational Filter
    const result = await prisma.user.findMany({
        include:{
            post: {
                where: {
                    published: true
                }
            }
        }
    })
    console.dir(result, {depth: Infinity});




}
relationalQueries()