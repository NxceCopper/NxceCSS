const sidebar = document.getElementById("side-bar")
const topbar = document.getElementById("topbar")

// pre check value 
bar = "float"
topbar.style.top = '-100px'
topbar.style.translate ='-200px 0'

function checkbar() {
    if (bar === "side") {
        sidebar.style.left = '-600px',
        topbar.style.top = '30px'
        bar = "float"
    } else {
        sidebar.style.left = '0',
        topbar.style.top = '-200px'
        bar = "side"
    }
}

sidebar.addEventListener('click', checkbar)
topbar.addEventListener('click', checkbar)
