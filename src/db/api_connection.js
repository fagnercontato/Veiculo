const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

exports.getVeicutos = async function name(params) {
    try {
        const dados = await prisma.veiculo.findMany();
        return dados
        
    } catch (error) {
        console.log(`Houve um erro ao trazer os dados ${error}`);
    }
    
}

exports.insert = async function (dados) {
    try {
        const insert = await prisma.veiculo.create({
            data: dados
        })
        return insert
    } catch (error) {
        console.log(`Houve um erro: ${error}`);
    }
}