// __mocks__/prisma.js
module.exports = {
  veiculo: {
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};