const readline = require('readline');

const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rd.question('Introdu pretul: ', pretul => {
    extractCurrencyValue(pretul);
    
})
//functia care verifica daca este pret si scoate semnul $
function extractCurrencyValue(str){
    const price = str.split("");
    if(price[0] == "$"){
        price[0] = "";
        console.log(price.join(""))
        ;
    } else {
        console.log('Nu este pret. Trebuie sa contina $');
    }
}