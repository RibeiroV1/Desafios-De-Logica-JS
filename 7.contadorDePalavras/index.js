function solucao(texto) {
    // Seu codigo aqui
   let contador = texto.split(" ").filter((palavra)=>{
    return palavra!=""
    })
    console.log(contador.length)
}