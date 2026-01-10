let heading = document.getElementById("title");
let button = document.getElementById("btn");
let paras = document.querySelectorAll("p");
let colorBtn = document.getElementById("color");

colorBtn.addEventListener("click", function(){
    let paras = document.querySelectorAll("p");
    for (let i=0; i<paras.length; i++){
        paras[i].style.color = "red";
    }
});

button.addEventListener("click", function(){
    heading.textContent = "Hello JS!";
});

let addBtn = document.getElementById("add");

addBtn.addEventListener("click", function(){
    let addpara = document.createElement("p");
    addpara.textContent = "Created para by JS";
    addpara.style.color = "blue";
    document.body.appendChild(addpara);
})

