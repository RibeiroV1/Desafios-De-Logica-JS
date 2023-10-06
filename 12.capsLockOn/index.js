function processData(input) {
    //Enter your code here
    if((input[0].toLocaleLowerCase() == input[0] && input.substring(1).toUpperCase() == input.substring(1))){
        console.log(input[0].toUpperCase() + input.substring(1).toLocaleLowerCase())
    }else if(input == input.toUpperCase()){
        console.log(input.toLowerCase())
    }else{
        console.log(input)
    }
} 