//GET
const listaProductos = () =>
  fetch(server + '/producto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUnProduto = (id) => {
  return fetch(server + `/producto/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const creaProdutos = (name, imageUrl, price) => {
  return fetch(server + '/producto', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No fue posible crear un producto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, name, price, description) => {
  return fetch(server + `/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      description,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(server + `/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
};
