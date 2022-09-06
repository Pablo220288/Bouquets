const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});



const modalCarrito = document.getElementById('modal-carrito')
const openCarrito = document.getElementById('carrito');
const openCarritoXs = document.getElementById('carrito_xs');
const closeCarrito = document.getElementById('close-carrito');

openCarritoXs.addEventListener('click',(e) =>{
    e.preventDefault()
    modalCarrito.classList.add('modal_show')
});

openCarrito.addEventListener('click',(e) =>{
e.preventDefault()
modalCarrito.classList.add('modal_show')
});

closeCarrito.addEventListener('click',() =>{
    modalCarrito.classList.remove('modal_show')
});