import { prisma } from "./utils/utils"


// const createUser = async() => {
//     const user = await prisma.user.create({
//         data: {
//             name: "Mui sojib",
//             email: "mui.sojib@example.com",
//             profile:{
//                 create: {
//                     bio: "I am a software engineer"
//                 }
//             }
//         }
//     })

//     console.log(user);
// }

// createUser();



// const createCategory = async() => {
// const category = await prisma.category.create({
//     data: {
//         name: "lee loo pudinaa"
//     }
// })

// console.log(category);
// }

// createCategory();


// const createPost = async () => {
//     const post = await prisma.post.create({
//         data: {
//             title: "My First Blog",
//             content: "Vai content mone nai",
//             author: {
//                 connect: {
//                     id: 2
//                 }
//             },
//             postCategories: {
//                 create:[
//                     {
//                         categoryId: 1
//                     },
//                     {
//                         categoryId: 2
//                     },
//                 ]
//             }
//         }
//     })
//     console.log(post);
// }
// createPost();


// const getAllPost = async () => {
//     const posts = await prisma.post.findMany()
//     console.log(posts);
// }

// getAllPost();