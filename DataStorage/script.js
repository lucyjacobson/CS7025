$(document).ready(hey);
let i = 0
let paragraph;
function hey(){
    document.getElementById("button").onclick = buttonClick;
    paragraph = document.getElementById("Clicks");
    window.localStorage.setItem("ClickNumber", `${i}`);
    paragraph.textContent = window.localStorage.getItem("ClickNumber");
}

function buttonClick(){
    i++;
    window.localStorage.setItem("ClickNumber", `${i}`)
    paragraph.textContent = window.localStorage.getItem("ClickNumber");
}

