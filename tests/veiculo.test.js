jest.mock('../prisma/client', () => require('./__mocks__/prisma'));
const prisma = require('../prisma/client');

const veiculoRepo = require('../src/db/veiculoRepository');

describe('Repositório de Veículos com Prisma', () => {
  afterEach(() => jest.clearAllMocks());

  test('criarVeiculo deve retornar veículo com ID', async () => {
    const novo = { modelo: 'Corsa', preco: 12000 };
    prisma.veiculo.create.mockResolvedValue({ id: 1, ...novo });

    const resultado = await veiculoRepo.criarVeiculo(novo);

    expect(resultado).toHaveProperty('id', 1);
    expect(resultado.modelo).toBe('Corsa');
  });

  test('createVeiculo trata erro', async () => {
    prisma.veiculo.create.mockRejectedValue(new Error('fail'));
    await expect(veiculoRepo.criarVeiculo({})).rejects.toThrow('fail');
  });

  test('listarVeiculos deve retornar array', async () => {
    prisma.veiculo.findMany.mockResolvedValue([{ id: 1, modelo: 'Corsa' }]);

    const lista = await veiculoRepo.listarVeiculos();

    expect(Array.isArray(lista)).toBe(true);
    expect(lista[0].modelo).toBe('Corsa');
  });

  test('getVeiculo trata erro', async () => {
    prisma.veiculo.findMany.mockRejectedValue(new Error('fail'));
    await expect(veiculoRepo.listarVeiculos(25)).rejects.toThrow('fail');
  });

  test('atualizarVeiculo deve modificar dados', async () => {
    const atualizado = { id: 1, preco: 13000 };
    prisma.veiculo.update.mockResolvedValue(atualizado);

    const resultado = await veiculoRepo.atualizarVeiculo(atualizado);

    expect(resultado.preco).toBe(13000);
  });

    test('updateVeiculo trata erro', async () => {
      prisma.veiculo.update.mockRejectedValue(new Error('fail'));
      await expect(veiculoRepo.atualizarVeiculo({ id: 3 })).rejects.toThrow('fail');
    });

  test('deletarVeiculo deve remover veículo', async () => {
    prisma.veiculo.delete.mockResolvedValue({ id: 1 });

    const resultado = await veiculoRepo.deletarVeiculo(1);

    expect(resultado).toHaveProperty('id', 1);
  });

  test('deleteVeiculo trata erro', async () => {
    prisma.veiculo.delete.mockRejectedValue(new Error('fail'));
    await expect(veiculoRepo.deletarVeiculo(4)).rejects.toThrow('fail');
  });
});