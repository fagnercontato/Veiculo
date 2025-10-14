
const connection = require("../db/api_connection")
const utils = require("./api_utils");


exports.getVeiculo = async function(req, res, next ){
    try {

        let vendido = undefined
        if (req.query["vendido"]) {
            vendido = req.query["vendido"] ==="true" ? true : false
        }

        let retorno = await connection.getVeiculo(vendido)
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}

exports.createVeiculo = async function(req, res, next ){
    try {
        const dados = req.body;
        const validacaoCamos = utils.validacaoDadosEntrada(dados)
        if(validacaoCamos !== ""){
            res.status(400).json(`${validacaoCamos}`)
            return
        }
    
        let retorno = await connection.createVeiculo(dados)
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}

exports.updateVeiculo = async function(req, res, next ){
    try {
        const dados = req.body;
        let retorno = await connection.updateVeiculo(dados)
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}

exports.deleteVeiculo = async function(req, res, next ){
    try {
        const { id } = req.body;
            
        let retorno = await connection.deleteVeiculo(id)
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}