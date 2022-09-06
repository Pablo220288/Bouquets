let productosDestacados = [
  {id:1, nombre:"BENMARCO MALBEC", bodega:"Susana Balbo Wines",variedad:"Malbec", año:2017, precio:1675, cantidad: 10, img:"assets/BENMARCO MALBEC.jpeg"},
  {id:2, nombre:"GRAN ENEMIGO GUALTALLARY", bodega:"Aleanna",variedad:"Cabernet Franc", año:2019, precio:8500, cantidad: 10, img:"assets/GRAN ENEMIGO GUALTALLARY.jpeg"},
  {id:3, nombre:"NOSOTROS MALBEC", bodega:"Susana Balbo Wines",variedad:"Malbec", año:2019, precio:17000, cantidad: 10, img:"assets/NOSOTROS MALBEC.jpeg"}
];

const destacados = document.getElementById('destacados');

productosDestacados.forEach((producto) => {
  const div = document.createElement('div')
  div.classList.add('vinos')
  div.innerHTML = `
  <div class="price">
    <p class="precio">$${producto.precio}</p>
  </div>
  <button class="button-shop-destacados" id="agregar${producto.id}"><ion-icon class="icono-shop-destacados" name="cart-outline"></ion-icon></button> 
  <img class="vino_img" id="vino4" src="${producto.img}" alt="${producto.nombre}">
  <p class="variedad_xs">${producto.variedad}</p>
  <p class="nombre_xs">${producto.nombre}C</p>
  <div class="slaid">
      <p class="nombre">${producto.nombre}C</p>
      <p class="variedad">${producto.variedad}</p>
      <p class="bodega">${producto.bodega}</p>
  </div>`
  destacados.appendChild(div)

  const button = document.getElementById(`agregar${producto.id}`)
  button.addEventListener('click', () => agregarCarrito(producto.id))
});

let carrito = [];

const contenCarrito = document.getElementById('conten-carrito');

const agregarCarrito = (idProducto) => {
  let item = productosDestacados.find((product) => product.id === idProducto)
  carrito.push(item)
  llenarCarrito()
};

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
            <p id="cant-item-num">${producto.cantidad}</p>
        </div>
        <ion-icon class="delete-item" id="delete-item" name="trash-outline"></ion-icon>
    </div>
    `
    contenCarrito.appendChild(div)})

    let carritoTotal = carrito.reduce((acum,item) => acum + item.precio,0)

    const totalCarrito = document.getElementById('total_carrito')
    totalCarrito.innerHTML = `$${carritoTotal}`
  };


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