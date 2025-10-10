const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

exports.insert = async function (dados) {
    try {
        
        const insert = await prisma.veiculo.create({
            data: {
                modelo: dados.modelo,
                tipo: dados.tipo,
                cor: dados.cor,
                vendido: dados.vendido,
                ano: dados.ano,
                preco: dados.preco
            }
        })
        return insert
    } catch (error) {
        return error.message;
    }
}