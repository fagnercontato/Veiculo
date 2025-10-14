const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Buscar veículos filtrando por status de venda
exports.getVeiculo = async (vendido) => {
  try {
    const dados = await prisma.veiculo.findMany({
      where: { vendido: vendido },
      orderBy: { preco: 'asc' },
    });
    return dados;
  } catch (erro) {
    console.error(`Erro ao buscar veículos: ${erro.message}`);
    throw erro;
  }
};

// Criar novo veículo
exports.createVeiculo = async (dados) => {
  try {
    const novoVeiculo = await prisma.veiculo.create({
      data: dados,
    });
    return novoVeiculo;
  } catch (erro) {
    console.error(`Erro ao criar veículo: ${erro.message}`);
    throw erro;
  }
};

// Atualizar veículo existente
exports.updateVeiculo = async (dados) => {
  try {
    const { id, ...campos } = dados;

    const veiculoAtualizado = await prisma.veiculo.update({
      where: { id },
      data: {
        ...campos,
        dataAtualizacao: new Date(),
      },
    });

    return veiculoAtualizado;
  } catch (erro) {
    console.error(`Erro ao atualizar veículo: ${erro.message}`);
    throw erro;
  }
};

// Deletar veículo por ID
exports.deleteVeiculo = async (id) => {
  try {
    const veiculoRemovido = await prisma.veiculo.delete({
      where: { id },
    });
    return veiculoRemovido;
  } catch (erro) {
    console.error(`Erro ao excluir veículo: ${erro.message}`);
    throw erro;
  }
};