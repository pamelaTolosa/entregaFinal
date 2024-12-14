let contenedor = document.getElementById("container");
let totalText = document.getElementById("totalText");
let finalCompra = document.getElementById("compraFinalizada");
let total = 0;

const productos = [
  { nombre: "Sahumerio de Lavanda", precio: 250, stock: 50, imagen: "../images/sahumeriosAromanza.jpg" },
  { nombre: "Bombas de Defumación", precio: 300, stock: 20, imagen: "../images/bombas.jpg" },
  { nombre: "Sahumerio de Incienso", precio: 220, stock: 40, imagen: "../images/sahumeriosSagrada1.jpg" },
  { nombre: "Sahumo de Salvia", precio: 200, stock: 25, imagen: "../images/sahumos1.jpg" },
  { nombre: "Portasahumerios", precio: 350, stock: 15, imagen: "../images/portasahumerios1.jpg" },
];

function pintarProductos(arrayProductos) {
  for (let i = 0; i < arrayProductos.length; i++) {
    contenedor.innerHTML +=
      `<div class="cajas">
            <p class="productosCajas">${arrayProductos[i].nombre}</p>
            <p class="productosCajas">Precio: $${arrayProductos[i].precio} </p>
            <img class="imagenes"src="${arrayProductos[i].imagen}">
            <input  class="fondoCaja" type="number" id="stock${i}" value="${arrayProductos[i].stock}" readonly >
            <input class="tamanioCantidad" type="number" id="cantidad${i}" placeholder="Ingrese cantidad" >
            <button class="btn1" id="btn${i}">Agregar al carrito</button>
           </div>`
  }
  for (let i = 0; i < arrayProductos.length; i++) {
    document.getElementById(`btn${i}`).addEventListener("click", () => {
      comprar(i, productos)
    })
  }
}
function comprar(index, arrayProductos) {
  let stockElement = document.getElementById(`stock${index}`);
  let cantidadElement = document.getElementById(`cantidad${index}`);
  let stock = parseInt(stockElement.value);
  let cantidad = parseInt(cantidadElement.value);
  let precio = arrayProductos[index].precio;
  if (cantidad > 0 && cantidad <= stock) {
    total += cantidad * precio;
    alert("Agregado al carrito con éxito. Total $" + total);
    totalText.innerHTML = `Total: ${total}`
    stockElement.value = stock - cantidad;
  } else {
    alert("Compra invalida. La cantidad debe ser mayor a 0 y menor o igual al stock")
  }
  cantidadElement.value = "";
}
pintarProductos(productos);
let final = document.getElementById("compraFinalizada");
final.addEventListener("click", () => {
  if (total > 0) {
    alert("Compra realizada con éxito");
    total = 0;
    totalText.innerHTML = `Total: ${total}`;
  } else {
    alert("No hay productos en el carrito para finalizar la compra");
  }
});
