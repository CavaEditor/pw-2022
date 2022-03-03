//lista OL
const patru = document.getElementById("patru");
const lista = document.getElementsByTagName("li")

for(let i = 2; i < 20; i++){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(i));
    patru.appendChild(li);
}

for(let i = 0; i < lista.length; i ++){
    if(i % 2 !== 0){
        lista[i].style.background = "violet"
    } else {
        lista[i].style.background = "green"
    }
}

