// filtering.ts

import { prisma } from "./utils/utils"

const filtering = async () => {

    // const andFiltering = await prisma.post.findMany({
    //     where:{
    //         AND: [
    //             {
    //             title: {contains: "My"}
    //             },
    //             {
    //                 published: true
    //             }
    //         ],
    //     }
    // })
    // console.log(andFiltering)


    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {contains: "My"}
                },{
                    content: {contains: "Hello"}
                }
            ]
        }
    })
    console.log(orFiltering);
}

filtering()