const formulario = document.getElementById("formulario");
const inputProductos = document.getElementById("inputProductos");


//Buscador de Productos
const formularioProductos = (data) => {
  formulario.addEventListener("keyup", (e) => {
    e.preventDefault();
    const letter = inputProductos.value.toLowerCase();
    console.log(letter);
    const arrayFiltrado = data.filter((item) => {
      const letraApi = item.name.toLowerCase();
      if (letraApi.indexOf(letter) !== -1) {
        return item;
      }
    });
    productTienda(arrayFiltrado);
  });
};
