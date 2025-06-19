import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tabla-cursos',
    imports: [CommonModule],
    templateUrl: './tabla-cursos.html',
    styleUrl: './tabla-cursos.css'
})

export class TablaCursos implements OnInit {

    public cursos: Curso[] = [];

    ngOnInit(): void {
        this.cursos = cursos;
    }
}
