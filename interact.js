const SideBar = document.getElementById("side-bar")
const Topbar = document.getElementById("topbar")
const Close = document.getElementById("close")
const Content = document.getElementById("content")

// pre check value 

SideBarState = true
Topbar.style.top = '-100px'
Topbar.style.opacity = '0'
Topbar.style.scale = '0.3'

function checkbar() {
    if (SideBarState === true) {
        SideBar.style.left = '-600px',
        SideBar.style.opacity = '0'
        Topbar.style.top = '20px'
        Topbar.style.opacity = '1'
        Topbar.style.scale = '1'
        SideBarState = false
    } else {
        SideBar.style.left = '0',
        SideBar.style.opacity = '1'
        Topbar.style.top = '-200px'
        Topbar.style.opacity = '0'
        Topbar.style.scale = '0.3'
        SideBarState = true
    }
}

function hide() {
    if (hide === "no") {
        SideBar.style.width = '100px'
        hide = "yes"
    } else {
        SideBar.style.width = '400px'
        hide = "no"
    }
}

SideBar.addEventListener('click', checkbar)
Close.addEventListener('click', checkbar)
search.addEventListener('input', ()=>{
    const word = search.value;
    console.log(word)
    if (word === "kuay") {
        alert("Kuay Rai I sus")
    }
});