let estudiasteJavascript: boolean = true;

if (estudiasteJavascript) {
    console.log("Puedes continuar aprendiendo TypeScript.");
} else {
    console.log("Primero estudia JavaScript, luego TypeScript.");
}

let interMiami: number = 11;
let realMadrid: number = 14;

function compararEquipos(equipo1: number, equipo2: number): void {
    if (equipo1 > equipo2) {
        console.log("El primer equipo tiene más títulos.");
    } else if (equipo1 < equipo2) {
        console.log("El segundo equipo tiene más títulos.");
    } else {
        console.log("Ambos equipos tienen la misma cantidad de títulos.");
    }
}

compararEquipos(interMiami, realMadrid);

let arregloNumeros: number[] = [1, 2, 3, 4, 5];
let arregloTexto: string[] = ["uno", "dos", "tres", "cuatro", "cinco"];

console.log("Tres se encuentra en el índice: " + arregloTexto.indexOf("tres")); // Imprime el índice del elemento "tres"

/*
type Programador = {
    nombre: string;
    edad: number;
    lenguajes: string[];
    tomaMate?: boolean | null;
    };
*/

interface Programador {
    nombre: string;
    edad: number;
    lenguajes: string[];
    tomaMate?: boolean | null; // Propiedad opcional
    saludar?: () => void; // Método opcional
}

let programador : Programador = {
    nombre: "Juan",
    edad: 30,
    lenguajes: ["JavaScript", "TypeScript", "Python"],
    tomaMate: true
};

programador.lenguajes.push("C#"); // Agrega un nuevo lenguaje al arreglo

programador = {
    ...programador,
    lenguajes: [...programador.lenguajes]
};

function enviarCV(programador: Programador): void {
    console.log("Enviando CV de " + programador.nombre);
}

enviarCV(programador);