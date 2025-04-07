// Ejercicio 3: Habilidades de personajes en un videojuego (Nivel: Básico)
// Descripción:
// Dado un personaje predefinido ("Mago", "Guerrero", "Arquero"),
// mostrar su habilidad especial utilizando una estructura switch-case.

// Indicaciones:

// Declara una variable con el nombre del personaje.
// Usa un switch-case para mostrar la habilidad correspondiente.
// Agrega un default para manejar personajes no reconocidos.

let personaje = "Mago";

switch (personaje) {
    case "Mago" : console.log("El mago puede lanzar bolas de fuego");
    break;
    case "Guerrero" : console.log("El guerrero tiene una espada poderosa");
    break;
    case "Arquero" : console.log("El arquero lanza flechas a larga  distancia");
    break;
    default:
        console.error("Personaje no encontrado");
        break;
}