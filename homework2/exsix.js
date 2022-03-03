const cifre = document.getElementsByTagName("tr");
const litere = document.getElementsByTagName("td")

for(let i = 0; i < cifre.length; i++){
    if(i%2 == 0){
        cifre[j].style.background = "white"
        cifre[j].style.textDecorationColor = "black"
    } else {
        cifre[j].style.background = "black"
        cifre[j].style.color = "white"
    }
    for(let j = 0; j < litere.length; j++){
        if(j%2 == 0){
            litere[j].style.background = "black"
            litere[j].style.textDecorationColor = "white"
        } else {
            litere[j].style.background = "white"
            litere[j].style.color = "black"
        }
    }
}

    
