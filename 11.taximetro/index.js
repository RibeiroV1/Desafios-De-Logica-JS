
function solucao(min, km) {
    let valorKM = 70
    let valorMIN = 50
    let total = 0
    if(min>20){
        total+=(20*valorMIN)
        valorMIN=30
        total+=(min-20)*valorMIN
    }else{
        total+=min*valorMIN
    }
    if(km>10){
        total+=(10*valorKM)
        valorKM=50
        total+=((km-10)*valorKM)
    }else{
        total+=km*valorKM
    }
    console.log(total)
}
