const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

exports.insert = async function (dados) {
    try {
        console.log(dados)
        console.log(process.env)
        const insert = await prisma.veiculo.create({
            data: dados
        })
        console.log(`Insert:` + insert)
        return insert
    } catch (error) {
        console.log(`Houve um erro: ${error}`)
        return error.message;
    }
}