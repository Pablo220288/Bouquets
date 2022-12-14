//Loader
window.addEventListener('load', () => {
  cargaDom();
  document.getElementById('loader').classList.toggle('loader-hide');
});

//Local Storage
const storage = () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'));
    llenarCarrito();
    incrementarCarrito();
    //Vuelvo a Cargar las Etiquetas en los Botones
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
  }
};

//Carrusel de Productos Destacados
const slaider = () => {
  new Glider(document.querySelector('.destacados'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind: true,
    dots: '.dots',
    arrows: {
      prev: '.carrusel-anterior',
      next: '.carrusel-siguiente',
    },
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
};

//Nav Scroll
window.addEventListener('scroll', () => {
  let nav = document.querySelector('.nav');
  nav.classList.toggle('nav-scroll', window.scrollY > 400);
});

//Indicador de Seccion
const menu = document.querySelectorAll('.menu');
const secciones = document.querySelectorAll('.seccion');
const seccion = new IntersectionObserver(
  (items) => {
    items.forEach((entrada) => {
      if (entrada.isIntersecting) {
        let menuActual = Array.from(menu).find(
          (item) => item.dataset.url === entrada.target.id
        );
        menuActual.classList.add('active');
        for (let menuAnterior of menu) {
          menuAnterior != menuActual && menuAnterior.classList.remove('active');
        }
      }
    });
  },
  {
    root: null,
    rootMargin: '0px',
    threshold: 0.8,
  }
);
secciones.forEach((item) => seccion.observe(item));

//Menu Hamburguesa
const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

let navItemMobile = document.getElementsByClassName('nav-mobile-item');

let navMobileOpenClose = () => {
  hamburger.classList.toggle('is-active');
  nav_mobile.classList.toggle('is-active');
};

hamburger.addEventListener('click', () => {
  navMobileOpenClose();
});

for (let i = 0; i < navItemMobile.length; i++) {
  navItemMobile[i].addEventListener('click', function () {
    setTimeout(() => {
      navMobileOpenClose();
    }, 200);
  });
}

//Modal carrito
const modalCarrito = document.getElementById('modal-carrito');
const openCarrito = document.getElementById('carrito');
const openCarritoXs = document.getElementById('carrito_xs');
const closeCarrito = document.getElementById('close-carrito');

const alertVacio = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El Carrito esta Vacio!',
    footer: 'Vamos a llenar esa Bodega..!!',
  });
};

openCarritoXs.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(carrito.length);
  carrito.length === 0
    ? alertVacio()
    : modalCarrito.classList.add('modal_show');
});

openCarrito.addEventListener('click', (e) => {
  e.preventDefault();
  carrito.length === 0
    ? alertVacio()
    : modalCarrito.classList.add('modal_show');
});

closeCarrito.addEventListener('click', () => {
  modalCarrito.classList.remove('modal_show');
});

//Fetch para solicitar Productos al JSON y renderizar el DOM
let prod = [];

let cargaDom = async () => {
  let respuesta = await fetch('./json/general.json');
  let respuestaData = await respuesta.json();
  respuestaData.forEach((producto) => {
    prod.push(producto);
  });
  //Productos Generales
  respuestaData.forEach((producto) => {
    cargaDomProductoGenerales(producto);
  });
  //Cargamos Items en los Filtros
  bodegas(respuestaData);
  variedades(respuestaData);

  let respuesta2 = await fetch('./json/destacados.json');
  let respuestaData2 = await respuesta2.json();

  //Productos Destacados
  respuestaData2.forEach((producto) => {
    cargaDomProductoDestacados(producto);
  });
  //Generamos el Slaider
  slaider();
  //Aplicamos Local Storage
  storage();
};

// Evento Formulario Campo Nombre
let nombreInput = document.getElementById('nombreInput');
let nombreLabel = document.getElementById('nombreLabel');

nombreInput.value.length != 0 && nombreLabel.classList.add('contact-label-up');

nombreInput.addEventListener('focus', () => {
  nombreLabel.classList.add('contact-label-up');
});
nombreInput.addEventListener('focusout', () => {
  nombreInput.value.length === 0 &&
    nombreLabel.classList.remove('contact-label-up');
});

// Evento Formulario Campo Email
let emailInput = document.getElementById('emailInput');
let emailLabel = document.getElementById('emailLabel');
let emailCheck = document.getElementById('chackEmail');

let regexEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

emailInput.value.length != 0 && emailLabel.classList.add('contact-label-up');

emailInput.addEventListener('focus', () => {
  emailLabel.classList.add('contact-label-up');
  emailInput.classList.remove('shake-horizontal');
});
emailInput.addEventListener('focusout', () => {
  if (emailInput.value.length === 0) {
    emailLabel.classList.remove('contact-label-up');
    emailCheck.classList.remove('chackEmailShow');
  } else if (regexEmail.test(emailInput.value)) {
    emailCheck.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon>`;
    emailCheck.classList.add('chackEmailShow');
  } else {
    emailCheck.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;
    emailCheck.classList.add('chackEmailShow');
    emailInput.classList.add('shake-horizontal');
  }
});

// Evento Formulario Campo Textarea
let textarea = document.getElementById('textarea');
let textareaLabel = document.getElementById('textareaLabel');

textarea.value.length != 0 && textareaLabel.classList.add('contact-label-up');

textarea.addEventListener('focus', () => {
  textareaLabel.classList.add('contact-label-up');
});
textarea.addEventListener('focusout', () => {
  textarea.value.length === 0 &&
    textareaLabel.classList.remove('contact-label-up');
});

// Evento Formulario Botoon Enviar
let formulario = document.getElementById('formulario');

let mensajeNombre = document.getElementById('contact-nombre-mensaje');
mensajeNombre.addEventListener('animationend', () => {
  mensajeNombre.classList.remove('show');
});
let mensajeEmail = document.getElementById('contact-email-mensaje');
mensajeEmail.addEventListener('animationend', () => {
  mensajeEmail.classList.remove('show');
});
let mensajeText = document.getElementById('contact-text-mensaje');
mensajeText.addEventListener('animationend', () => {
  mensajeText.classList.remove('show');
});
let mensajeEnviado = document.getElementById('contact-enviado-mensaje');
mensajeEnviado.addEventListener('animationend', () => {
  mensajeEnviado.classList.remove('show');
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  let item = e.target.children;

  if (item[0].firstElementChild.value === '') {
    mensajeNombre.classList.add('show');
  } else if (item[1].firstElementChild.value === '') {
    mensajeEmail.classList.add('show');
  } else if (item[2].firstElementChild.value === '') {
    mensajeText.classList.add('show');
  } else {
    formulario.reset();
    emailCheck.classList.remove('chackEmailShow');
    mensajeEnviado.classList.add('show');
  }
});
