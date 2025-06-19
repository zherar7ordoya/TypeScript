class Pelicula {
    titulo: string;
    director: string;
    año: number;
    protagonistas: string[] = [];

    // Constructor que acepta parámetros opcionales
    constructor(titulo?: string, director?: string, año?: number) {
        this.titulo = titulo ?? "";
        this.director = director ?? "";
        this.año = año ?? 0;
    }

    mostrarInfo(): void {
        console.log(`Título: ${this.titulo}, Director: ${this.director}, Año: ${this.año}`);
    }
}

const pelicula1 = new Pelicula("Inception", "Christopher Nolan", 2010);
const pelicula2 = new Pelicula("The Matrix", "Lana Wachowski, Lilly Wachowski", 1999);
pelicula1.protagonistas.push("Leonardo DiCaprio", "Joseph Gordon-Levitt");
pelicula2.protagonistas.push("Keanu Reeves", "Laurence Fishburne");
pelicula1.mostrarInfo();
pelicula2.mostrarInfo();

let pelicula3 = new Pelicula();
pelicula3.titulo = "Interstellar";
pelicula3.director = "Christopher Nolan";
pelicula3.año = 2014;
pelicula3.protagonistas.push("Matthew McConaughey", "Anne Hathaway");
pelicula3.mostrarInfo();

const anon = () => {
    console.log("Esta función no tiene nombre y no se puede invocar directamente.");
};