// Ejercicio 4: Personalización de habilidades (Nivel: Intermedio)
// Descripción:
// Cada personaje inicia con una habilidad y puntos de experiencia (XP). 
// Si tiene suficientes XP, puede mejorar su habilidad gastando puntos.

// Indicaciones:

// Define un personaje con una habilidad inicial.
// Declara una variable con puntos de experiencia (XP).
// Define una cantidad fija de XP requerida para mejorar la habilidad.
// Usa una estructura if para verificar si el personaje puede mejorar su habilidad.
// Muestra la habilidad mejorada si se cumplen las condiciones.

let personaje = "Mago";
let xp = 100;
let xpRequerido = 50;

prompt("Cuantos años tienes?");
if (xp >= xpRequerido) {
    personaje = "Guerrero";
    console.log("El personaje ha mejorado a " + personaje);
}
