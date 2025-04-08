import { prisma } from "./utils/utils"


const aggregates = async () => {
      // find count of title fields
    const countPost = await prisma.post.aggregate({
        _count: {
            title: true
        }
    })
   // find count of pots
    const countPostData = await prisma.post.count();

    console.log(countPostData);
}


aggregates()