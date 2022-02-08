const readline = require('readline');
const rd = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

rd.question('Introdu numarul: ', n =>{
    dividers(n);
})

const dividers = (number) =>{
    for(let i =1; i < number+1; i++){
        if(number%i == 0){
            console.log(i);
        }
    }
}