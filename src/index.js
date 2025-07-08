import "./styles.css"

const nav_btn = document.getElementById('nav-toggle');

nav_btn.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('nav-vertical');
    document.querySelector('.hamburger').classList.toggle('open')
    
    document.getElementById('nav-close').classList.toggle('nav-close')

    document.querySelector('.logo-container').classList.toggle('logo-close')
})