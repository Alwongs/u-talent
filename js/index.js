const menuBtn = document.querySelector('.nav-panel__menu-btn')
const menuList = document.querySelector('.nav-panel__list')
const homeLink = document.querySelector('.nav-panel__home')
const navPanelContainer = document.querySelector('.nav-panel__container')

menuBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
    if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active')
        menuList.classList.remove('active')
    } else {
        menuBtn.classList.add('active') 
        menuList.classList.add('active') 
    }
}
function closeMenu() {
    if (menuBtn.classList.contains('active')) {
        menuList.classList.remove('active')
        menuBtn.classList.remove('active')
    }
}

menuList.addEventListener('click', closeMenu)
homeLink.addEventListener('click', closeMenu)

window.onscroll = function() {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop === 0) {
        navPanelContainer.classList.add('transparent') 
    } else {
        navPanelContainer.classList.remove('transparent')        
    }
}