const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

exports.getVeiculo = async function name(params) {
    try {
        const dados = await prisma.veiculo.findMany();
        return dados
        
    } catch (error) {
        console.log(`Houve um erro ao buscar informações ${error}`);
    }
    
}

exports.createVeiculo = async function (dados) {
    try {
        const insert = await prisma.veiculo.create({
            data: dados
        })
        return insert
    } catch (error) {
        console.log(`Houve um erro ao criar: ${error}`);
    }
}

exports.updateVeiculo = async function (dados) {
    try {
        // console.log(id, dados)
        const update = await prisma.veiculo.update({
           where: {
                id: dados.id,
            },
            data: {
                modelo: dados.modelo || undefined,
                marca: dados.marca || undefined,
                tipo: dados.tipo || undefined,
                cambio: dados.cambio || undefined,
                km: dados.km || undefined,
                cor: dados.cor || undefined,
                vendido: dados.vendido || undefined,
                ano: dados.ano || undefined,
                preco: dados.preco || undefined,
                dataAtualizacao: new Date()
            }
        });
        return update
    } catch (error) {
        console.log(`Houve um erro ao atualizar: ${error}`);
    }
}
exports.deleteVeiculo = async function (id) {
    try {
        const insert = await prisma.veiculo.delete({
            where: {
                id: id
            }
        });
        return insert
    } catch (error) {
        console.log(`Houve um erro ao excuir: ${error}`);
    }
}