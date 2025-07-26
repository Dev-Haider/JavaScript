console.log("welcome to our table generator ")
let table= Number(prompt("table you want to generate: "))
let start= Number(prompt("from where your want to start the table generation: "))
let End= Number(prompt("from where your want to end the table generation: "))
if(start<=End){
    for(let generation= start; generation<= End; ++generation){
        console.log(table,"x", generation,"=",table*generation)
    }
}
else{
    console.log("Invalid acces please put a number! ")
}