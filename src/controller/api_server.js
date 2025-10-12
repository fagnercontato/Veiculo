const dotenv = require('dotenv');
dotenv.config({override: true});
// if(process.env.AMBIENTE === 'develop'){
//     dotenv.config({
//         path: '.env.test',
//         override: true
//     });
// }

const controller = require('./api_controller');

const express = require('express');
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');



async function startServer() {
    
    server.use(cors());
    server.use(express.json());
    server.use(fileUpload());

    server.get(`/veiculo`, controller.getVeiculos)
    server.post(`/veiculo/insert`, controller.insert)

}

startServer()
exports.server = server;