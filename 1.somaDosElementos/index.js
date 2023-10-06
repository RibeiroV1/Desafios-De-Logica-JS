function solucao(lista) {
    let soma = lista.reduce((soma, numeroAtual)=>soma+numeroAtual, 0)
    console.log(soma)
}
solucao([0, 4,5,6,7,2])