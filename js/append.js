//Funcion de Carga en DOM del Index Destacados
let destacados = document.getElementById('destacados');
const cargaDomProductoDestacados = (producto) =>{
    let div = document.createElement('div');
    div.classList.add('vinos');
    div.innerHTML = `
    <div class="price">
      <p class="precio">$${producto.precio}</p>
    </div>
    <button class="button-shop-destacados" id="agregar${producto.id}">
      <ion-icon class="icono-shop-destacados" name="cart-outline"></ion-icon>
      <span id="cant-shop${producto.id}" class="cant-shop cantidad${producto.id}"></span>
    </button> 
    <img class="vino_img" id="vino4" src="${producto.img}" alt="${producto.nombre}">
    <p class="variedad_xs">${producto.variedad}</p>
    <p class="nombre_xs">${producto.nombre}</p>
    <div class="slaid">
        <p class="nombre">${producto.nombre}</p>
        <p class="variedad">${producto.variedad}</p>
        <p class="bodega">${producto.bodega}</p>
    </div>`;
    destacados.appendChild(div);
      //Boton para agregar al carrito
    let button = document.getElementById(`agregar${producto.id}`);
    button.addEventListener('click', () => agregarCarrito(producto.id));
    button.addEventListener('click', () => cantShopCarrito(producto.id));
};

//Funcion de Carga en DOM del Index Generales
let generales = document.getElementById('generales');
const cargaDomProductoGenerales = (producto) =>{
  let div = document.createElement('div');
  div.classList.add('vinos');
  div.innerHTML = `
  <div class="price">
    <p class="precio">$${producto.precio}</p>
  </div>
  <button class="button-shop-destacados" id="agregar-gral${producto.id}">
    <ion-icon class="icono-shop-destacados" name="cart-outline"></ion-icon>
    <span id="cant-shop-gral${producto.id}" class="cant-shop cantidad${producto.id}"></span>
  </button> 
  <img class="vino_img" id="vino4" src="${producto.img}" alt="${producto.nombre}">
  <p class="variedad_xs">${producto.variedad}</p>
  <p class="nombre_xs">${producto.nombre}</p>
  <div class="slaid">
      <p class="nombre">${producto.nombre}</p>
      <p class="variedad">${producto.variedad}</p>
      <p class="bodega">${producto.bodega}</p>
  </div>`;
  generales.appendChild(div);
    //Boton para agregar al carrito
  let button = document.getElementById(`agregar-gral${producto.id}`);
  button.addEventListener('click', () => agregarCarrito(producto.id));
  button.addEventListener('click', () => cantShopCarrito(producto.id));
};

//Funcion de Carga en DOM del Carrito
const cargaDomCarrito = (producto) => {
    let div = document.createElement('div');
    div.className = ('item-carrito');
    div.innerHTML = `
    <img class="vino_img_carrito" id="producto${producto.id}" src="${producto.img}" alt="${producto.nombre}">
    <div class="datos-item">
        <p class="precio-item">$${producto.precio}</p>
        <div class="cant-item">
            <p>Cant.</p>
            <div class="cant-carrito">
              <ion-icon id="menosCantCarrito${producto.id}" class="arrow-carrito" name="chevron-back-outline"></ion-icon>
              <p id="cant-item-num">${producto.cantidad}</p>
              <ion-icon id="masCantCarrito${producto.id}" class="arrow-carrito" name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
        <ion-icon class="delete-item" id="delete-item${producto.id}" name="trash-outline"></ion-icon>
    </div>
    `;
    contenCarrito.appendChild(div);
  
    //Boton para eliminar Items del carrito
    let deleteCarrito = document.getElementById(`delete-item${producto.id}`);
    deleteCarrito.addEventListener('click', () => eliminarDelCarrito(producto.id));

    //Boton para sumar cantidad de un Items al carrito
    let masEnCarrito = document.getElementById(`masCantCarrito${producto.id}`);
    masEnCarrito.addEventListener('click',() => sumar(producto.id));
  
    //Boton para restar cantidad de un Items al carrito
    let menosEnCarrito = document.getElementById(`menosCantCarrito${producto.id}`);
    menosEnCarrito.addEventListener('click',() => restar(producto.id));
};