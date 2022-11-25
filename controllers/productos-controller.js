import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, price, imageUrl, id, description) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <img src="${imageUrl}" alt="img">
            <h1 class="product-name"> ${name} </h1>
            <p class="preco">${formatPrice(price)}</p>
            <!--<a class="ver-produto" href="product.html?id=${id}">Ver Producto</a>-->
            <input id="mostrar-modal${id}" name="modal" type="radio" /> 
            <label for="mostrar-modal${id}"> Ver Producto </label>
            <input id="cerrar-modal" name="modal" type="radio" /> 
            <label for="cerrar-modal"> X </label> 
            <div id="modal">
              <img src="${imageUrl}" alt="img">
              <h1 class="product-name"> ${name} </h1>
              <p class="preco">${formatPrice(price)}</p>
              <p class="descripcion">${description}</p>
            </div>
        </div>
        <style type="text/css">
          #mostrar-modal${id} {
            display: none;
          }
          #mostrar-modal${id} + label {
            background: #2A7AE4;;
            display: table;
            margin: auto;
            color: #fff;
            line-height: 3;
            padding: 0 1em;
            text-transform: uppercase;
            cursor: pointer;
          }
          #mostrar-modal${id} + label:hover {
            background: rgb(8, 186, 245);
          }
          #mostrar-modal${id}:checked ~ #modal {
            top: 0;
          }
          #mostrar-modal${id}:checked ~ #cerrar-modal + label {
            display: block;
          }
        </style>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};



const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id,
          elemento.description
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
