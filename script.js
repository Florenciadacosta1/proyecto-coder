
let seleccionado = prompt("¿Desea agregar al carrito?");

if ( seleccionado = "si" )  { 

  alert("Articulo ingresado");

}else {

  alert("Articulo no ingresado");
  
}

let pagos = 0;

let calza = 9000;

pagos = pagos + calza;

let remera = 4500;

pagos = pagos + remera;

let buzo = 1300;

pagos = pagos + buzo;

console.log("a pagar: " + pagos);


//OBJETOS

// const producto1 = {
//     titulo: "Sillón",
//   color: "Rojo",
// precio: 50000
// }

   function Producto(titulo, nombre, precio) {

     this.titulo = titulo;
     this.nombre = nombre;
     this.precio = precio;

 }

 const producto1 = new Producto("Top", "Malibú", 5000);
 const producto2 = new Producto("Top", "Lupe", 4200);
 const producto3 = new Producto("Top", "Calu", 5000);
 const producto4 = new Producto("Top", "Cream", 5000);
 const producto5 = new Producto("Top", "Iris", 5500);

 console.log(producto4); 