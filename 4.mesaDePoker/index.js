function solucao(min, max, valores) {
      let novaLista = valores.filter((valor) =>{
          return (valor <= max && valor >= min)
      })
      console.log(novaLista)
  }