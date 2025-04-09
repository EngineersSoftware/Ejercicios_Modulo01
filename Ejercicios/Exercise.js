/*
 * Ejercicio 1: Aplicando descuentos según el tipo de usuario (Nivel: Básico)}
 * 
 * Descripción:
   Dado un usuario con una categoría predefinida ("Normal", "Estudiante", "VIP" o "Premium") y un precio base de un producto, 
   calcular el total a pagar aplicando el descuento correspondiente.

   Indicaciones:

   Declara una variable con el tipo de usuario (por ejemplo, let usuario = "Estudiante";).
   Define el precio base del producto.
   Usa una estructura if-else para asignar el descuento según el tipo de usuario.
   Calcula el total a pagar después de aplicar el descuento.
 */

let usuario = "VIP"; // tipo de estudiante
let precioProducto = 100; // precio base del producto
let descuento = 0; // Aca almacenamos el descuento

if (usuario === "Normal") {
    descuento = 0;    // No tiene descuento
} else if ( usuario === "VIP") {
    descuento = 0.2;    // 20% de descuento
} else if (usuario === "Premiun"){
    descuento = 0.5; // 50% de descuento
} else {
    console.log("Tipo de usuario no válido");
}

let totalPagar = precioProducto - (precioProducto * descuento); // Calculo total
console.log(`El total a pagar para el usuario ${usuario} es: $${totalPagar}`);

