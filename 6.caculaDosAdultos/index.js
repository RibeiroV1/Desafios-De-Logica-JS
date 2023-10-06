function solucao(lista) {
      let filtrado = lista.filter((idade)=>{
          return idade >= 18
      })
      if(filtrado.length == 0 ){
          console.log("CRESCA E APARECA")
          return
      }else{
          let min = filtrado[0]
          for(let item of filtrado){
              if(item < min)min=item
          }
          console.log(min)
      }
  }