function processData(input) {
    //Enter your code here
    let inputs = input.trim().split("\n")
    
    let senha = inputs[0]
    let usuario = inputs[1]
    let resposta = ""
    for(let letra of usuario){
        for(let i =0;i<senha.length; i++){
            if(letra == senha[resposta.length]){
                resposta+=letra
            }
        }
    }
    if(resposta===senha){
        console.log("SIM")
    }else{
        console.log("NAO")
    }
    
} 