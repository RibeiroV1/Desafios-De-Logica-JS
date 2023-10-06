function solucao(numeros) {
    // seu codigo aqui
   let soma = 0
   let jogadores = numeros.length
   let posicao = 1
   for(let item of numeros){soma+=item}
   for(let i =1; i<soma; i++){
       posicao++
       if(posicao>jogadores)posicao=1
   }
   console.log(posicao)
}