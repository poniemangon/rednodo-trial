const boton = document.querySelector('.burger');
const nav = document.querySelector('.navbar-burger');

boton.addEventListener('click', ()=>{
    boton.classList.toggle('active');
    nav.classList.toggle('active');
})