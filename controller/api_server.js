const dotenv = require('dotenv');
dotenv.config({override: true});
// if(process.env.AMBIENTE === 'develop'){
//     dotenv.config({
//         path: '.env.test',
//         override: true
//     });
// }
const express = require('express');
const server = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');



async function startServer() {
    
    server.use(cors());
    server.use(express.json());
    server.use(fileUpload());
}

startServer()
exports.server = server;