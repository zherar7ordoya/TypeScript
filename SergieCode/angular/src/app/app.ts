import { Component } from '@angular/core';
import { TablaAlumnos } from "./tabla-alumnos/tabla-alumnos";
import { TablaCursos } from "./tabla-cursos/tabla-cursos";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [TablaAlumnos, TablaCursos], // ← Agregado acá también
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class App {
    protected title = 'angular';

    cursos: boolean = true;

    handleCambio() {
        this.cursos = !this.cursos;
        console.log("Cambio de vista: " + this.cursos);
    }
}
