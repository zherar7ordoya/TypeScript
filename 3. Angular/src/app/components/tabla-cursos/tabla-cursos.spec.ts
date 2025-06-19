import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCursos } from './tabla-cursos';

describe('TablaCursos', () => {
  let component: TablaCursos;
  let fixture: ComponentFixture<TablaCursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaCursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaCursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
