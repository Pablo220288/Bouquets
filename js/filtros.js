let bodega = document.getElementById('bodega');
let variedad = document.getElementById('variedad');

let bodegas = (producto) => {
  let bodegasGeneral = [];
  for (const prodBodegas of producto) {
    bodegasGeneral.push(prodBodegas.bodega);
  }
  let single = new Set(bodegasGeneral);
  let bodegasSingle = [...single].sort();

  bodega.innerHTML = '';
  bodega.innerHTML = `<option>Todas las Bodegas</option>`;
  for (const select of bodegasSingle) {
    bodega.innerHTML += `<option>${select}</option>`;
  }
};

let variedades = (producto) => {
  let variedadesGeneral = [];
  for (const prodVariedades of producto) {
    variedadesGeneral.push(prodVariedades.variedad);
  }
  let single = new Set(variedadesGeneral);
  let variedadesSingle = [...single].sort();

  variedad.innerHTML = '';
  variedad.innerHTML = `<option>Todas las Variedades</option>`;
  for (const select of variedadesSingle) {
    variedad.innerHTML += `<option>${select}</option>`;
  }
};

filtro = [];

bodega.addEventListener('change', () => {
  if (
    bodega.value === 'Todas las Bodegas' &&
    variedad.value === 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    prod.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
    variedades(prod);
  } else if (
    bodega.value === 'Todas las Bodegas' &&
    variedad.value != 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    filtro.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
  } else if (
    bodega.value != 'Todas las Bodegas' &&
    variedad.value === 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    filtro = [];
    let prodVariedad = prod.filter(
      (producto) => producto.bodega === bodega.value
    );
    prodVariedad.forEach((producto) => {
      cargaDomProductoGenerales(producto);
      filtro.push(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
    variedades(filtro);
  } else if (
    bodega.value != 'Todas las Bodegas' &&
    variedad.value != 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    let prodVariedad = filtro.filter(
      (producto) => producto.bodega === bodega.value
    );
    prodVariedad.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
  }
});

variedad.addEventListener('change', () => {
  if (
    bodega.value === 'Todas las Bodegas' &&
    variedad.value === 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    prod.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
    bodegas(prod);
  } else if (
    bodega.value === 'Todas las Bodegas' &&
    variedad.value != 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    filtro = [];
    let prodVariedad = prod.filter(
      (producto) => producto.variedad === variedad.value
    );
    prodVariedad.forEach((producto) => {
      cargaDomProductoGenerales(producto);
      filtro.push(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
    bodegas(filtro);
  }
  if (
    bodega.value != 'Todas las Bodegas' &&
    variedad.value === 'Todas las Variedades'
  ) {
    generales.innerHTML = '';
    filtro.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
  } else if (
    bodega.value != 'Todas las Bodegas' &&
    variedad.value != 'Todas las Variedades'
  ) {
    let prodVariedad = filtro.filter(
      (producto) => producto.variedad === variedad.value
    );
    generales.innerHTML = '';
    prodVariedad.forEach((producto) => {
      cargaDomProductoGenerales(producto);
    });
    //Imprimo las etiquetas en los Botones si estan en el carrito
    carrito.forEach((producto) => {
      cargaEtiqueta(producto);
    });
  }
});
