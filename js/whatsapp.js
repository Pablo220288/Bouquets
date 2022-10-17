let pulso = document.querySelector('.pulso');

pulso.addEventListener('animationend', () => {
    pulso.classList.remove('animate');
});

let ejecutarPulso = () => {
    setInterval(() => {
        pulso.classList.add('animate')
    },7000);
};

window.addEventListener('load',() =>{
    ejecutarPulso()
});

let whatsappOpenClose = document.getElementById('wahtsapp_pop');
let whatsappChat = document.querySelector('.wahtsapp_chat_container');
let chat_1 = document.getElementById('chat_1');
let chat_2 = document.getElementById('chat_2');
let chat_dots = document.getElementById('chat_dots');
let chat_hs = document.querySelectorAll('.chat_hs');

whatsappOpenClose.addEventListener('click', () => {
    whatsappChat.classList.toggle('show');

    let momentoActual = new Date();

    let minutosActual = momentoActual.getMinutes() < 10 ? 
    0 + momentoActual.getMinutes() : momentoActual.getMinutes();

    for( let hs of chat_hs){
        hs.innerText = momentoActual.getHours() + ":" + minutosActual
    };

    setTimeout(() => {
        chat_dots.classList.add('hidden');
        chat_1.classList.add('visible');
    },4000);
    setTimeout(() => {
        chat_2.classList.add('visible');
    },6000)    ;
});