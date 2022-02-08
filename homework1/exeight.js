const readline = require('readline');
const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rd.question('Username: ', username =>{
    rd.question('Password: ', password =>{
        verifyUserAndPass(username, password);
    })
})
//verifica utilizator, folosind ?
function verifyUserAndPass(username, password){
    const user = 'admin';
    const pass = '1234';
    let usern = (username == user && password == pass) ? 'Privet!' :
    (username == user && password !== pass) ? 'Nepravelinii paroli!' :
    (username !== user && password == pass) ? 'Nepravilinii username!' :
    (username !== user && password !== pass) ? 'Oshibka validatsii!' : 'Povtorite';
    
    console.log(usern);
}