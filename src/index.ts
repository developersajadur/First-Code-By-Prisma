import { prisma } from "./utils/utils"


// const createUser = async() => {
//     const user = await prisma.user.create({
//         data: {
//             name: "Mui sojib na",
//             email: "mui.sojibna@example.com",
//             profile:{
//                 create: {
//                     bio: "I am a software engineer na"
//                 }
//             }
//         }
//     })

//     console.log(user);
// }

// createUser();



const createPost = async () => {
    const post = await prisma.post.create({
        data: {
            title: "My First Blog",
            content: "Vai content mone nai",
            author: {
                connect: {
                    id: 1
                }
            }
        }
    })
    console.log(post);
}
createPost();