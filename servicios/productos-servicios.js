// const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());
const listaProductos = () => fetch("https://alfonsinaguido.github.io/E-Commerce/producto").then(respuesta => respuesta.json());


export const productoServices = {
    listaProductos
};
