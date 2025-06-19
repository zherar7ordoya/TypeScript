class Sorteo<T> {
    private ticket: T | undefined;

    constructor(private nombre: string) { }

    setticket(ticket: T) {
        this.ticket = ticket;
    }

    getticket(): T | undefined {
        return this.ticket !== undefined ? this.ticket : undefined;
    }

    mostrarSorteo(): void {
        if (this.ticket !== undefined) {
            console.log(`Sorteo: ${this.nombre}, Número: ${this.ticket}`);
        } else {
            console.log(`Sorteo: ${this.nombre}, No se ha asignado un número.`);
        }
    }
}

let sorteo1 = new Sorteo<number>("Sorteo de la Lotería");
sorteo1.setticket(12345);
sorteo1.mostrarSorteo();

let sorteo2 = new Sorteo<string>("Sorteo de la Rifa");
sorteo2.setticket("A123");
sorteo2.mostrarSorteo();