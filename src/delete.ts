import { prisma } from "./utils/utils";


const deleteData = async () => {
    const singleDelete = await prisma.post.delete({
        where: {
            id: 1
        }
    });

    // const deleteMany = await prisma.post.deleteMany({})

    console.log(singleDelete);
};

deleteData();