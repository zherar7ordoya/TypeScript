console.log("Esto no lo sabías, ¿no?");

class Persona
{
    constructor(nombre: string, edad?: number)
    {
        this.nombre = nombre;
        this.edad = edad !== undefined ? edad : 0;
    }

    nombre: string;
    edad: number;

    saludar()
    {
        if (this.edad !== undefined)
        {
            console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
        }
        else
        {
            console.log(`Hola, me llamo ${this.nombre}.`);
        }
    }
}