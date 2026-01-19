let container = document.getElementById("container");
let btn = document.getElementById("button");

btn.addEventListener("click", function(){
    let newPara = document.createElement("p");
    newPara.textContent = "New Note";
    container.append(newPara);
})

container.addEventListener("click", function(event){
    if(event.target.tagName ==="P"){
        if(event.target.style.color === "green"){
            event.target.style.color = "gray";
        }
        else{
            event.target.style.color = "green";
        }
    }
})