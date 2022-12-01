// const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const server = 'https://e-commerce-kvic.onrender.com';

const listaProductos = () => fetch(server + '/producto').then((respuesta) => respuesta.json());

export const productoServices = {
    listaProductos
};

