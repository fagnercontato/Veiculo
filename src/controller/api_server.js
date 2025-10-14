const dotenv = require('dotenv');
dotenv.config({override: true});

const controller = require('./api_controller');

const express = require('express');
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('../../swagger.json');


function startServer() {
    
    server.use(cors());
    server.use(express.json());
    server.use(fileUpload());

    server.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    server.get(`/veiculo`, controller.getVeiculo);
    server.post(`/veiculo`, controller.createVeiculo)
    server.put(`/veiculo`, controller.updateVeiculo)
    server.delete(`/veiculo`, controller.deleteVeiculo)

}

startServer()
exports.server = server;