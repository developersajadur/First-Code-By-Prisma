import { prisma } from "./utils/utils";


const updates = async () => {
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 7
    //     },
    //     data: {
    //         title: "Title 5",
    //     }
    // });


    // update many
    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         title: "Title 2"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    // console.log(updateMany)


    const upsertData = await prisma.post.upsert({
        where: {
            id: 10
        },
        update: {
            id: 1
        },
        create: {
            title: "My Blog from update ",
            content: "Vai content dibo na",
            author: {
                connect: {
                    id: 2
                }
            },
            postCategories: {
                create:[
                    {
                        categoryId: 1
                    },
                ]
            }
        }
    });

    console.log(upsertData)
};

updates();