const request = require('supertest');
const app = require('../src/controller').server
const http = 'http://localhost:3000'

describe('Rotas de Veículo', () => {
    let idGerado
    test('GET /veiculo - deve retornar todos os veículos', async () => {
        const res = await request(http).get('/veiculo');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /veiculo - deve criar um novo veículo', async () => {
        const novoVeiculo = {
            marca: "chevrolet",
            modelo: "classic",
            tipo: "passeio",
            cor: "verde",
            cambio: "manual",
            km: 98000,
            vendido: false,
            ano: 2011,
            preco: 15000
        };

        const res = await request(http)
            .post('/veiculo')
            .send(novoVeiculo)
            .set('Accept', 'application/json');

        idGerado = res.body.id

        expect(res.statusCode).toBe(200,201);
        expect(res.body).toHaveProperty('id');
    });

    test('PUT /veiculo - deve atualizar um veículo existente', async () => {
        const veiculoAtualizado = {
            id: idGerado,
            marca: "chevrolet",
            modelo: "classic",
            tipo: "passeio",
            cor: "verde",
            cambio: "manual",
            km: 98000,
            vendido: false,
            ano: 2011,
            preco: 16000
        };

        const res = await request(http)
            .put('/veiculo')
            .send(veiculoAtualizado)
            .set('Accept', 'application/json');

        expect(res.statusCode).toBe(200, 201);
        expect(res.body).toHaveProperty('id', veiculoAtualizado.id);
    });

    test('DELETE /veiculo - deve deletar um veículo', async () => {
        const res = await request(http)
            .delete('/veiculo')
            .send({ id: idGerado })
            .set('Accept', 'application/json');

        expect(res.statusCode).toBe(200,201);
        expect(res.body).toHaveProperty('id');
    });

});