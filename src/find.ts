import { prisma } from "./utils/utils"

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany();

    console.log("Get all data: ", getAllFromDB);

    // find first and find first or throw error
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    });

    // find unique and find unique or throw error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 2
        },
        select: {
            title: true,
            // content: true,
            // authorName: true
        }
    })

    console.log({ findUnique })
}

main();