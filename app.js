import { valida } from "./validacion.js";
//archivo que ejecuta las funciones para la validación del formulario
const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  //el evento blur se produce cuando el elemento pierde el foco, por ejemplo comprueba si se ha introducido un correo, y en caso contrario muestra un error.
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
