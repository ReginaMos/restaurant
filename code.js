const burger = document.querySelector('#burger');
const menu = document.querySelector('#vis-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp')
});