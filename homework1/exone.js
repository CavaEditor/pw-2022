


 //folosesc modulul pentru imputuri din consola readline

 const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
 });

 readline.question('Introdu un numar ', n =>{
    switch(n){
        case '0':
             console.log('0');
             break;
        case '1':
            console.log(`Unu`);
            break;
        case '2':
            console.log('Doi');
            break;
        case '3':
            console.log('Trei');
            break;
        case '4':
            console.log('Patru');
            break;
        case '5':
            console.log('Cinci');
            break;
        case '6':
            console.log('Sase');
            break;
        case '7':
            console.log('Sapte');
            break;
        case '8':
            console.log('Opt');
            break;
        case '9':
            console.log('Noua');
            break;
        default:
            console.log('')
    }
  
    readline.close();
 })