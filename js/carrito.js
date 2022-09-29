//Array Carrito
let carrito = [];

//Esperamos a que se Cargue el DOM y si Existe LocalStorage lo cargamos
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')){
      carrito = JSON.parse(localStorage.getItem('carrito'));
      llenarCarrito();
      incrementarCarrito();
      //Vuelvo a Cargar las Etiquetas en los Botones
      carrito.forEach((producto) => {
        cargaEtiqueta(producto);
      });
    };
});

//Funcion de Carga de etiquetas en Boton
const cargaEtiqueta = (productoCantidad) =>{
  let elements = document.getElementsByClassName(`cantidad${productoCantidad.id}`);
	for (let i = 0; i < elements.length; i++) {
	  elements[i].innerHTML = ''
    elements[i].innerHTML = `<p>x${productoCantidad.cantidad}</p>`;
    elements[i].classList.add('cant-shop-active');
  }
};

//Funcion para agragar elementos al carrito
let agregarCarrito = (idProducto) => {
  //Si el producto ya existe le sumo 1 a la Cantidad
  if(carrito.some((item) => item.id === idProducto)){
    let item = carrito.findIndex((product) => product.id === idProducto);
    carrito[item].cantidad ++;
    llenarCarrito();
    Toastify({
      text: `${carrito[item].nombre}\nCant. ${carrito[item].cantidad}`,
      className: "masCantidad",
      style: {
        background: "linear-gradient(to right, #ae3200 , #460000)",
        right: -150,
      },
      offset: {
        x: 8,
        y: 50 
      },
      
    }).showToast();
  }else{
    let item = productosGenerales.find((product) => product.id === idProducto);
    carrito.push(item);
      Toastify({
        text: "Agregado al Carrito",
        style: {
          background: `linear-gradient(to right, #ae3200 , #460000)`,
        },
        offset: {
          x: 8,
          y: 50 
        },
      }).showToast();
  };
  llenarCarrito();
};

//Agregamos Etiqueta al Boton 
let cantShopCarrito = (idProducto) =>{
  let item = carrito.findIndex((product) => product.id === idProducto);
  let elements = document.getElementsByClassName(`cantidad${idProducto}`);
	for (let i = 0; i < elements.length; i++) {
    if(item < 0){
      elements[i].classList.remove('cant-shop-active')
    }else{
      let itemCantidad = carrito[item].cantidad
      elements[i].innerHTML = '';
      elements[i].innerHTML = `<p>x${itemCantidad}</p>`;
      elements[i].classList.add('cant-shop-active');
    }
  }
}

//Total de Cantidad en Carrito
let cantTotalCarrito = 0;
let cantCarritoTotal = document.getElementById('cant-carrito-total');
let cantCarritoTotalXs = document.getElementById('cant-carrito-total-xs');

let show = () => {
  cantCarritoTotalXs.classList.add('cant-carrito-total-show');
  cantCarritoTotal.classList.add('cant-carrito-total-show');
};
let hide = () => {
  cantCarritoTotalXs.classList.remove('cant-carrito-total-show');
  cantCarritoTotal.classList.remove('cant-carrito-total-show');
};

let incrementarCarrito = () => {
  carrito.length === 0 ? hide() : show();
  cantTotalCarrito = carrito.reduce((acum,item) => acum + item.cantidad,0);

  cantCarritoTotal.innerHTML = "";
  cantCarritoTotalXs.innerHTML = "";

  cantCarritoTotal.innerHTML = `<p>${cantTotalCarrito}</p>`;
  cantCarritoTotalXs.innerHTML = `<p>${cantTotalCarrito}</p>`;
};

//LLenamos el carrito (DOM) con los elementos seleccionados
let contenCarrito = document.getElementById('conten-carrito');
const llenarCarrito = () =>{
  contenCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    cargaDomCarrito(producto);
  });
  
  //Averiguamos monto total del carrito (Precio Item * Cantidad Item)
  let carritoTotal = carrito.reduce((acum,item) => acum + item.precio * item.cantidad,0);
  const totalCarrito = document.getElementById('total_carrito');
  totalCarrito.innerHTML = `$${carritoTotal}`;

  //Guardamos en Local Storage el Carrito
  localStorage.setItem('carrito',JSON.stringify(carrito));

  //Incrementamos el Total del el Carrito
  incrementarCarrito();
 
};

//Funcion para eliminar Items del carrito
let eliminarDelCarrito = (idProducto) => {
  carrito.splice(carrito.findIndex((product) => product.id === idProducto),1);
  llenarCarrito();
  cantShopCarrito(idProducto);
  incrementarCarrito();
};

//Funcion para vaciar el carrito  
let vaciarCarrito = document.getElementById('vaciar-carrito');
vaciarCarrito.addEventListener('click', eliminarTodoElCarrito);

function eliminarTodoElCarrito(){
  //Elimino las etiquetas

  carrito.forEach((producto) => {
    let elements = document.getElementsByClassName(`cantidad${producto.id}`);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('cant-shop-active')
    }
  });
  //Vacio el carrito
  carrito.splice(0,carrito.length);
  llenarCarrito();
  incrementarCarrito();
};

//Funcion para aumentar cantidad en carrito
let sumar = (idProducto) =>{
  let item = carrito.findIndex((product) => product.id === idProducto);
  carrito[item].cantidad ++;
  llenarCarrito();
  cantShopCarrito(idProducto);
  incrementarCarrito();
};

//Funcion para restar cantidad en carrito
let restar = (idProducto) =>{
  let item = carrito.findIndex((product) => product.id === idProducto);
  carrito[item].cantidad === 1 ? eliminarDelCarrito(idProducto) : carrito[item].cantidad --;
  llenarCarrito();
  cantShopCarrito(idProducto);
  incrementarCarrito();
};

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

