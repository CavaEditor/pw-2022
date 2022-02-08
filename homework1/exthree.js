const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//citirea cifrelor
let max = 0;
rd.question(`Introdu 4 cifre, despartite prin virgula: `, a =>{
    const sirul = a.split(",");
    max = sirul[0];
    for(let i = 0; i < sirul.length; i++){
        
        if(parseInt(max) < parseInt(sirul[i+1])){
            max = sirul[i+1];
        }
    }
    console.log(max);
})