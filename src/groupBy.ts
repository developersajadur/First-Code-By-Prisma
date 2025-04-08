import { prisma } from "./utils/utils"


const groupBy = async () => {
    const groupPost = await prisma.post.groupBy({
        by: ["published"],
        _count: {
            title: true
        },
        having: {
            authorId: {
                _count: {
                    gt: 0
                }
            }
        }
    })

    console.log(groupPost);
}

groupBy()