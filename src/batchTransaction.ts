import { prisma } from "./utils/utils";

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            name: "jhankar",
            email: "jkr@ph.com"
        }
    });

    const updateUser = prisma.user.update({
        where: {
            id: 6
        },
        data: {
            name: "updated name from batchTransaction"
        }
    });

    const [updatedUser, createAUser] = await prisma.$transaction([
        updateUser,
        createUser
    ]);

    console.log(updatedUser, createAUser);
};

batchTransaction();
