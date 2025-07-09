const nav_btn = document.getElementById('nav-toggle');

export const nav_toggle = function() {
    nav_btn.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('nav-vertical');
        document.querySelector('.hamburger').classList.toggle('open')
        
        document.getElementById('nav-close').classList.toggle('nav-close')

        document.querySelector('.logo-container').classList.toggle('logo-close')
    })
}