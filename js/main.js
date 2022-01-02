// Image slider on the Our-team-block

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
    const show = document.querySelector('.show');
    show.classList.remove('show');
    if(show.nextElementSibling) {
        show.nextElementSibling.classList.add('show');
    } else {
        slides[0].classList.add('show');
    }
    setTimeout(() => show.classList.remove('show'));
}

const prevSlide = () => {
    const show = document.querySelector('.show');
    show.classList.remove('show');
    if(show.previousElementSibling) {
        show.previousElementSibling.classList.add('show');
    } else {
        slides[slides.length - 1].classList.add('show');
    }
    setTimeout(() => show.classList.remove('show'));
}


next.addEventListener('click', e => {
    nextSlide();
})

prev.addEventListener('click', e => {
    prevSlide();
})


// Side Menu

const navIcon = document.getElementById('nav-icon');
const openMenu = document.getElementById('open-menu');
const openMenuOverlay = document.querySelector('.overlay');
const links = document.querySelectorAll('.link-item');
const clickedBtn = () => {
    navAnimation();
    openMenu.classList.toggle('active');
    slideDownAnimation();
    
}

const exitMenu = () => {
    openMenu.classList.toggle('active');
    slideDownAnimation();
    navAnimation();
}

navIcon.addEventListener('click', clickedBtn);
openMenuOverlay.addEventListener('click', exitMenu);

function navAnimation() {
    navIcon.classList.toggle('open');
}

function slideDownAnimation() {
    links.forEach(link => {
        link.classList.toggle('slide-down');
    });
}

