const controller = require('./controller');

async function startUp() {
    console.log(`Iniciando a aplicação veiculo`);
    try {
        
            controller.server.listen(parseInt(process.env.PORT), function(){
                console.log(`API Iniciada em ${process.env.PORT}`)
            });
        
    } catch (error) {
      console.log(error)  
    }
    
}
startUp();