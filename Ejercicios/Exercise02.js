// Ejercicio 2: Tienda con diferentes categorías de usuario (Nivel: Intermedio)
// Descripción:
// Dado un usuario con una categoría predefinida ("Normal", "Estudiante", "VIP", "Premium", "Empleado", "Mayorista") 
// y una lista de productos con sus respectivos precios, calcular el total a pagar después de aplicar el descuento correspondiente.

// Indicaciones:

// Declara una variable con el tipo de usuario.
// Crea un array con los precios de varios productos.
// Usa un ciclo for para sumar los precios de los productos.
// Aplica el descuento correspondiente según la categoría del usuario.
// Calcula y muestra el total a pagar.

let usuario = "Estudiante";
let precioProducto = [50,30,20,100];
let descuento = 0;
let totalPrecios = 0;


for (let i = 0; i < precioProducto.length; i++) {
    totalPrecios += precioProducto[i];
}

if (usuario === "Normal") {
    descuento = 0;    // No tiene descuento
} else if ( usuario === "Estudiante") {
    descuento = 0.2;    // 20% de descuento
} else if (usuario === "VIP"){
    descuento = 0.5; // 50% de descuento
} else if (usuario === "Premium"){
    descuento = 0.8; // 80% de descuento
} else if (usuario === "Empleado"){
    descuento = 0.9; // 90% de descuento
} else if (usuario === "Mayorista"){
    descuento = 0.25; // 95% de descuento
} else {
    console.log("Tipo de usuario no válido");
}

let totalPagar = totalPrecios - (totalPrecios * descuento); // Calculo total

console.log(`El total a pagar para el usuario ${usuario} es: $${totalPagar}`);
