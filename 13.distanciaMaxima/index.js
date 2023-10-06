function processData(input) {
    //Enter your code here
    const linhas = input.trim().split("\n")
    let numeroFuncionarios = parseFloat(linhas[0])
    let posicoes = []
    for(let i =1; i<linhas.length; i++){
        let posicao = linhas[i].split(" ")
        posicoes.push({
            x: parseFloat(posicao[0]),
            y: parseFloat(posicao[1])
        })
    }
    
    let maiordistancia = 0
    for( let p in posicoes){
        let primeiro = posicoes[p]
        for(let i = p; i< posicoes.length; i++ ){
            let segundo = posicoes[i]
            let distanciaY = (primeiro.y - segundo.y)**2
            let distanciaX = (primeiro.x - segundo.x)**2
            let raiz = Math.sqrt(distanciaY+distanciaX)
            if(raiz>maiordistancia)maiordistancia=raiz
        }
    }
    console.log(maiordistancia)
} 