const sidebar = document.getElementById("side-bar")
const topbar = document.getElementById("topbar")
const Close = document.getElementById("close")

// pre check value 

bar = "side"
topbar.style.top = '-100px'
topbar.style.opacity = '0'
topbar.style.scale = '0.3'

function checkbar() {
    if (bar === "side") {
        sidebar.style.left = '-600px',
        sidebar.style.opacity = '0'
        topbar.style.top = '20px'
        topbar.style.opacity = '1'
        topbar.style.scale = '1'
        bar = "float"
    } else {
        sidebar.style.left = '0',
        sidebar.style.opacity = '1'
        topbar.style.top = '-200px'
        topbar.style.opacity = '0'
        topbar.style.scale = '0.3'
        bar = "side"
    }
}

function hide() {
    if (hide === "no") {
        sidebar.style.width = '100px'
        hide = "yes"
    } else {
        sidebar.style.width = '400px'
        hide = "no"
    }
}

sidebar.addEventListener('click', checkbar)
Close.addEventListener('click', checkbar)
search.addEventListener('input', ()=>{
    const word = search.value;
    console.log(word)
    if (word === "kuay") {
        alert("Kuay Rai I sus")
    }
});