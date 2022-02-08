const readline = require('readline');

let sum = 0;
const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rd.question('Introdu prima cifra: ', a =>{
    rd.question('Introdu a doua cifra: ', b=>{
        const pa = parseInt(a);
        const pb = parseInt(b);
        if (pa < pb){
            for(let i = pa; i < pb+1; i ++){
                if(i%2 == 0){
                    sum+=i;
                }
            }
            console.log(`Suma cifrelor pare din intervalul ${a} si ${b} este ${sum}`)
        } else {
            console.log('a trebuie sa fie mai mic de cat b')
        }
    })
})
