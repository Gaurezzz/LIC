const formVentaRA = document.querySelector('#formVentaRA');
console.log("hola");
const procesaRA = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    console.log(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos);
}   