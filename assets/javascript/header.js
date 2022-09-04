const navBar = document.querySelector(".nav-primary")
const openMenu = document.querySelector(".nav-menu-btn")
const closeMenu = document.querySelector(".nav-close-btn")

const visibility = navBar.getAttribute('data-visible')

openMenu.addEventListener("click", ()=> {
    if(visibility === "false"){
     openMenu.classList.remove("active")
     closeMenu.classList.add("active")
     navBar.setAttribute("data-visible", true)
    }else{
     openMenu.classList.add("active")
    }
 })

closeMenu.addEventListener("click", ()=> {
    if(visibility === "false"){
     closeMenu.classList.remove("active")
     openMenu.classList.add("active")
     navBar.setAttribute("data-visible", false)
    }else{
     closeMenu.classList.add("active")
    }
})

window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle
    ("header-scroll", window.scrollY > 520)
})
