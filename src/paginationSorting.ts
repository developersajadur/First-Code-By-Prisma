import { prisma } from "./utils/utils"


const paginationSorting = async () => {
    // offset pagination
    const offsetData = await prisma.user.findMany({
        skip: 2,
        take: 2
    })
    //    console.log("Offest paginated data: ", offsetData);


     // cursor based pagination
     const cursorData = await prisma.user.findMany({
        cursor: {
            id: 2
        },
        take: 2
     })
    //   console.log("cursor based paginated data: ", cursorData);

    // sorting
    const sortedData = await prisma.user.findMany({
        orderBy: {
            id: "desc"
        },
        skip: 1,
        take: 2,
        where: {
            name:{
                contains: "sojib"
            }
        }
    })
    console.log("sorted data: ", sortedData);
}

paginationSorting()