//lista OL
const patru = document.getElementById("patru");


    for(let i = 2; i < 20; i++){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(i));
        patru.appendChild(li);
    }