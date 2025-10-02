
exports.teste = async function(req, res, next ){
    let retorno = [{retorno: 'Hello Word!'}]
    res.send(retorno);
}