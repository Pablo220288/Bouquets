//Array Carrito
let carrito = [];

//Esperamos a que se Cargue el DOM y si Existe LocalStorage lo cargamos
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'))
      llenarCarrito()
      }
});

//Incorporamos elementos del Stock al DOM
let destacados = document.getElementById('destacados');

productosDestacados.forEach((producto) => {
  let div = document.createElement('div')
  div.classList.add('vinos')
  div.innerHTML = `
  <div class="price">
    <p class="precio">$${producto.precio}</p>
  </div>
  <button class="button-shop-destacados" id="agregar${producto.id}"><ion-icon class="icono-shop-destacados" name="cart-outline"></ion-icon><span id="cant-shop${producto.id}" class="cant-shop"></span></button> 
  <img class="vino_img" id="vino4" src="${producto.img}" alt="${producto.nombre}">
  <p class="variedad_xs">${producto.variedad}</p>
  <p class="nombre_xs">${producto.nombre}</p>
  <div class="slaid">
      <p class="nombre">${producto.nombre}</p>
      <p class="variedad">${producto.variedad}</p>
      <p class="bodega">${producto.bodega}</p>
  </div>`
  destacados.appendChild(div)

  //Boton para agregar al carrito
  let button = document.getElementById(`agregar${producto.id}`)
  button.addEventListener('click', () => agregarCarrito(producto.id))
  button.addEventListener('click', () => cantShopCarrito(producto.id))
});

//Funcion para agragar elementos al carrito
let agregarCarrito = (idProducto) => {
  //Si el producto ya esta le sumo 1 a la Cantidad
  if(carrito.some((item) => item.id === idProducto)){
    let item = carrito.findIndex((product) => product.id === idProducto)
    carrito[item].cantidad = carrito[item].cantidad + 1
    llenarCarrito()
  }else{
    let item = productosDestacados.find((product) => product.id === idProducto)
    carrito.push(item)
  }
  llenarCarrito()
};

//Agregamos Etiqueta al Boton 
let cantShopCarrito = (idProducto) =>{
  console.log(idProducto);
  let cant = document.getElementById(`cant-shop${idProducto}`)
  let item = carrito.findIndex((product) => product.id === idProducto)

  if(item < 0){
    cant.classList.remove('cant-shop-active')
  }else{
    let itemCantidad = carrito[item].cantidad

    cant.innerHTML = ''
  
    const cantTxt = document.createElement('div')
    cantTxt.innerHTML = `<p>x${itemCantidad}</p>`
    cant.appendChild(cantTxt)
  
    cant.classList.add('cant-shop-active')
  }
}

//LLenamos el carrito (DOM) con los elementos seleccionados
let contenCarrito = document.getElementById('conten-carrito');

const llenarCarrito = () =>{
  contenCarrito.innerHTML = ""
  carrito.forEach((producto) => {
    const div = document.createElement('div')
    div.className = ('item-carrito')
    div.innerHTML = `
    <img class="vino_img_carrito" id="producto${producto.id}" src="${producto.img}" alt="${producto.nombre}">
    <div class="datos-item">
        <p class="precio-item">$${producto.precio}</p>
        <div class="cant-item">
            <p>Cant.</p>
            <div class="cant-carrito">
              <ion-icon id="menosCantCarrito${producto.id}" class="arrow-carrito" name="chevron-back-outline"></ion-icon>
              <p id="cant-item-num">${producto.cantidad}</p>
              <ion-icon id="masCantCarrito${producto.id}" class="arrow-carrito"  name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
        <ion-icon class="delete-item" id="delete-item${producto.id}" name="trash-outline"></ion-icon>
    </div>
    `
    contenCarrito.appendChild(div)
  
    //Boton para eliminar Items del carrito
    let deleteCarrito = document.getElementById(`delete-item${producto.id}`)
    deleteCarrito.addEventListener('click', () => eliminarDelCarrito(producto.id))

    //Boton para sumar cantidad de un Items al carrito
    let masEnCarrito = document.getElementById(`masCantCarrito${producto.id}`)
    masEnCarrito.addEventListener('click',() => sumar(producto.id))
  
    //Boton para restar cantidad de un Items al carrito
    let menosEnCarrito = document.getElementById(`menosCantCarrito${producto.id}`)
    menosEnCarrito.addEventListener('click',() => restar(producto.id))
  })
    //Averiguamos monto total del carrito (Precio Item * Cantidad Item)
    let carritoTotal = carrito.reduce((acum,item) => acum + item.precio * item.cantidad,0)
    const totalCarrito = document.getElementById('total_carrito')
    totalCarrito.innerHTML = `$${carritoTotal}`

    //guardamos en Local Storage el Carrito
    localStorage.setItem('carrito',JSON.stringify(carrito))
};

//Funcion para eliminar Items del carrito
let eliminarDelCarrito = (idProducto) => {
  carrito.splice(carrito.findIndex((product) => product.id === idProducto),1)
  llenarCarrito()
  cantShopCarrito(idProducto)
};

//Funcion para vaciar el carrito  
let vaciarCarrito = document.getElementById('vaciar-carrito')
vaciarCarrito.addEventListener('click', eliminarTodoElCarrito)

function eliminarTodoElCarrito(){
  carrito.splice(0,carrito.length)
  llenarCarrito()
}

//Funcion para aumentar cantidad en carrito
let sumar = (idProducto) =>{
  let item = carrito.findIndex((product) => product.id === idProducto)
  carrito[item].cantidad = carrito[item].cantidad + 1
  llenarCarrito()
  cantShopCarrito(idProducto)
}
//Funcion para restar cantidad en carrito
let restar = (idProducto) =>{
  let item = carrito.findIndex((product) => product.id === idProducto)
  carrito[item].cantidad = carrito[item].cantidad - 1
  llenarCarrito()
  cantShopCarrito(idProducto)
}

//Esto lo pienso usar para despues ingresar mas items
function ingresoDestacados(){
    class Destacados{
        constructor(id,nombre,bodega,variedad,año,precio,cantidad,img){
          this.id = id;
          this.nombre = nombre;
          this.bodega = bodega;
          this.variedad = variedad;
          this.año = año;
          this.precio = precio;
          this.cantidad = cantidad;
          this.img = img;
        }
        venta(){
          this.cantidad = this.cantidad - 1;
        }
    }
};