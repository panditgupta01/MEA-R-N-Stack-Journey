
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = input.value+"    ";
    input.value = "";
    let del = document.createElement("button");
    del.innerText = "Delete";
    li.appendChild(del);
});
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let list = event.target.parentElement;
        console.log(list);
        list.remove();
    }
});