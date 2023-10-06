function solucao(precos) {
  //seu codigo aqui
    let soma = 0
    let maisBarato = precos[0]
    for(let item of precos){
        soma+=item
        if(item < maisBarato)maisBarato=item
    }
    if(precos.length > 2){
        soma-=(maisBarato/2)
    }
    console.log(soma)
  
}