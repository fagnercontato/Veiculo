
exports.validacaoDadosEntrada = function (dados) {

    let msg = ``
    let text = `está faltando o campo:`
    if( dados.modelo === undefined || dados.modelo == "") msg = msg +` - ${text} modelo`
    if( dados.marca === undefined || dados.marca == "") msg = msg +` - ${text} marca`
    if( dados.tipo === undefined || dados.tipo == "") msg = msg +` - ${text} tipo`
    if( dados.cor === undefined || dados.cor == "")  msg = msg +` - ${text} cor`
    if( dados.cambio === undefined || dados.cambio == "")  msg = msg +` - ${text} cambio`
    if( dados.km === undefined || dados.km == "")  msg = msg +` - ${text} km`
    if( dados.vendido === undefined ) msg = msg +` - ${text} vendido`
    if( dados.ano === undefined || dados.ano == "") msg = msg +` - ${text} ano`
    if( dados.preco === undefined || dados.preco == "") msg = msg +` - ${text} preco`

    return msg
}