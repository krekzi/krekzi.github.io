function openModal(){
document.getElementById("modal").style.display="flex";
}

function closeModal(){
document.getElementById("modal").style.display="none";
}

function copyText(){
const text=document.getElementById("script").innerText;

navigator.clipboard.writeText(text);

alert("Copied!");
}
