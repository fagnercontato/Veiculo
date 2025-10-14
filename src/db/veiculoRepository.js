const prisma = require('../../prisma/client');

module.exports = {
  async listarVeiculos() {
    return await prisma.veiculo.findMany();
  },

  async criarVeiculo(data) {
    return await prisma.veiculo.create({ data });
  },

  async atualizarVeiculo(data) {
    return await prisma.veiculo.update({
      where: { id: data.id },
      data,
    });
  },

  async deletarVeiculo(id) {
    return await prisma.veiculo.delete({
      where: { id },
    });
  },
};