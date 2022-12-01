// const server = 'http://localhost:3000';

const server = 'https://fake-api-json-server.onrender.com';

const listaProductos = () => fetch(server + '/producto').then((respuesta) => respuesta.json());

export const productoServices = {
    listaProductos
};

