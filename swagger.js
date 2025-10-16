 const swaggerAutogen = require("swagger-autogen");

 const outputFile = "./swagger.json"
 const endPontFiles =  require("./src/controller/api_server.js")

 const doc = {
    info: {
        title: "Api Veiculos",
        description: "Esta aplicação permite gerenciar os veiculos"
        
    },
    host: "http://localhost:3000",
    schemes: [ "http" ]
 }

 swaggerAutogen()(outputFile, endPontFiles, doc);