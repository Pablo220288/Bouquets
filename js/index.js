//Menu Hamburguesa
const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});

//Modal carrito
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


// Evento Formulario Campo Nombre
let nombreInput = document.getElementById('nombreInput');
let nombreLabel = document.getElementById('nombreLabel');

if(nombreInput.value.length != 0){
    nombreLabel.classList.add('contact-label-up')
}

nombreInput.addEventListener('focus', () =>{
    nombreLabel.classList.add('contact-label-up')
})
nombreInput.addEventListener('focusout', () =>{
    if(nombreInput.value.length === 0){
        nombreLabel.classList.remove('contact-label-up')
    }
})

// Evento Formulario Campo Email
let emailConten = document.getElementById('contact-email');
let emailInput = document.getElementById('emailInput');
let emailLabel = document.getElementById('emailLabel');

if(emailInput.value.length != 0){
    emailLabel.classList.add('contact-label-up')
}

emailInput.addEventListener('focus', () =>{
    emailLabel.classList.add('contact-label-up')
})
emailInput.addEventListener('focusout', () =>{
    if(emailInput.value.length === 0){
        emailLabel.classList.remove('contact-label-up')
    }else if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(emailInput.value)){
        alert("La dirección de email " + emailInput.value + " es correcta.");
       } else {
        alert("La dirección de email es incorrecta.");
       }
})

// Evento Formulario Campo Textarea
let textarea = document.getElementById('textarea');
let textareaLabel = document.getElementById('textareaLabel');

if(textarea.value.length != 0){
    textareaLabel.classList.add('contact-label-up')
}

textarea.addEventListener('focus', () =>{
    textareaLabel.classList.add('contact-label-up')
})
textarea.addEventListener('focusout', () =>{
    if(textarea.value.length === 0){
        textareaLabel.classList.remove('contact-label-up')
    }
})