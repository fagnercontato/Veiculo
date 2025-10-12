
const connection = require("../db/api_connection")


exports.getVeiculos = async function(req, res, next ){
    try {
       
        let retorno = await connection.getVeicutos()
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}

exports.insert = async function(req, res, next ){
    try {
        const dados = req.body;
        const validacaoCamos = validacaoDadosEntrada(dados)
        if(validacaoCamos !== ""){
            res.status(400).json(`${validacaoCamos}`)
            return
        }
    
        let retorno = await connection.insert(dados)
        
        res.send(retorno);
        
    } catch (error) {
        res.send(500).json([{msg: `Houve um erro: ${error}`}])
    }
}

function validacaoDadosEntrada(dados) {
    let msg = ``
    let text = `está faltando o campo:`
    if(typeof dados.modelo === "undefined" || dados.modelo == "") msg = msg +` - ${text} modelo`
    if(typeof dados.marca === "undefined" || dados.marca == "") msg = msg +` - ${text} marca`
    if(typeof dados.tipo === "undefined" || dados.tipo == "") msg = msg +` - ${text} tipo`
    if(typeof dados.cor === "undefined" || dados.cor == "")  msg = msg +` - ${text} cor`
    if(typeof dados.cambio === "undefined" || dados.cambio == "")  msg = msg +` - ${text} cambio`
    if(typeof dados.km === "undefined" || dados.km == "")  msg = msg +` - ${text} km`
    if(typeof dados.vendido === "undefined" ) msg = msg +` - ${text} vendido`
    if(typeof dados.ano === "undefined" || dados.ano == "") msg = msg +` - ${text} ano`
    if(typeof dados.preco === "undefined" || dados.preco == "") msg = msg +` - ${text} preco`

    return msg
}