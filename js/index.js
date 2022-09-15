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
let emailInput = document.getElementById('emailInput');
let emailLabel = document.getElementById('emailLabel');
let emailCheck = document.getElementById('chackEmail');

if(emailInput.value.length != 0){
    emailLabel.classList.add('contact-label-up')
}

emailInput.addEventListener('focus', () =>{
    emailLabel.classList.add('contact-label-up')
    emailInput.classList.remove('shake-horizontal')
})
emailInput.addEventListener('focusout', () =>{
    if(emailInput.value.length === 0){
        emailLabel.classList.remove('contact-label-up')
        emailCheck.classList.remove('chackEmailShow')
    }else if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(emailInput.value)){
        emailCheck.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`
        emailCheck.classList.add('chackEmailShow')
       } else {
        emailCheck.innerHTML = `<ion-icon name="close-outline"></ion-icon>`
        emailCheck.classList.add('chackEmailShow')
        emailInput.classList.add('shake-horizontal')
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

// Evento Formulario Botoon Enviar
let formulario = document.getElementById('formulario');
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;

    console.log(inputs[1].value);
})