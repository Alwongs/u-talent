const popup = document.querySelector('.popup');
const menuBtn = document.querySelector('.nav-panel__menu-btn');
const menuList = document.querySelector('.nav-panel__list');
const homeLink = document.querySelector('.nav-panel__home');
const participants = document.querySelector('.participants');
const navPanelContainer = document.querySelector('.nav-panel__container');
let modalBtnOk;

menuBtn.addEventListener('click', toggleMenu);
participants.addEventListener('click', openModal);

function openModal() {
    participants.removeEventListener('click', openModal);
    popup.innerHTML = 
    `
    <div class="background">
        <div class="modal">
            <p>Пока нет участников</p>
            <button class="modal-btn-ok">Ок</button>
        </div>
    </div>
    `;
    modalBtnOk = document.querySelector('.modal-btn-ok');
    modalBtnOk.addEventListener('click', closeModal);
}
function closeModal() {
    modalBtnOk.removeEventListener('click', closeModal);
    popup.innerHTML = ``;
    participants.addEventListener('click', openModal);
}

function toggleMenu() {
    if (menuBtn.classList.contains('active')) {
        menuBtn.classList.remove('active');
        menuList.classList.remove('active');
    } else {
        menuBtn.classList.add('active');
        menuList.classList.add('active');
    }
}
function closeMenu() {
    if (menuBtn.classList.contains('active')) {
        menuList.classList.remove('active');
        menuBtn.classList.remove('active');
    }
}

menuList.addEventListener('click', closeMenu);
homeLink.addEventListener('click', closeMenu);

window.onscroll = function() {
    let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (posTop === 0) {
        navPanelContainer.classList.add('transparent'); 
    } else {
        navPanelContainer.classList.remove('transparent');        
    }
}