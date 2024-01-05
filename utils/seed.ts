import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

try {
    console.log("main")
    const hash = await Bun.password.hash("password1");
    console.log(hash)
    await prisma.users.create({
        data: {
            username: "test@test.com",
            password: hash
        },
    })
    console.log("after create")
    const count = await prisma.users.count()

    console.log(`There are ${count} users in the database.`)
} catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
}