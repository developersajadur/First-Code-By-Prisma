import { prisma } from "./utils/utils"

const rawQuery = async() => {
    const posts = await prisma.$queryRaw`SELECT * FROM "posts"`;
    console.log(posts);

     // delete users table data
    // await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`
}

rawQuery()