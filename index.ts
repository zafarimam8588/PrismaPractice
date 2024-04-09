const { PrismaClient }  =  require('@prisma/client')

const prisma = new PrismaClient()
// const prisma = new PrismaClient({log:["query"]})

async function main() {
  // CREATING NEW USER
    // create,createMany
  // await prisma.user.deleteMany();
  // const users = await prisma.user.createMany({
  // data:[
  //   {
  //     name:"Zafar",
  //     email:"zafar@test.com",
  //     age:23,
  //   },
  //   {
  //     name:"Imam",
  //     email:"imam@test.com",
  //     age:18,
  //   }
  // ],
  // include:{
  //   userPreference:true
  // } // WE CAN EITHER USE SELECT OR INCLUDE
  // select:{
  //   name:true,
  //   age:true,
  //   userPreference:{select:{id:true}}
  // }
//  })
//  console.log(users);
//------------------------------------------------------

//FINDING USER
//findUnique, findFirst,findMany
// const user = await prisma.user.findMany({
//   where:{
//     Role:"BASIC",
//     // age:{lt:20}
//   },
  // orderBy:{
  //   age:"asc"
  // },
  // take:3,
  // skip:1

// })
// console.log(user)
//-------------------------------------------------------------
// UPDATE QUERIES
//update,updateMany
// const user = await prisma.user.updateMany({
//   where:{
//     age:18
//   },
//   data:{
//     age:100
//   }
// })
// console.log(user)
//-------------------------------------------------------------------
const user = await prisma.user.delete({
  where:{
    email:"imam1@test.com"
  }
})
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })