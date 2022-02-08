const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rd.question(`Introdu cuvantul `, cuvant =>{
    ucFirst(cuvant);
})

//functia care desparte si mareste prima litera dintr-un cuvant
function ucFirst(str){
    const litere = str.split("");
    litere[0] =  litere[0].toUpperCase();
    console.log(litere.join(""));
}