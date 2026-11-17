import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadisticasTareas } from './estadisticas-tareas';

describe('EstadisticasTareas', () => {
  let component: EstadisticasTareas;
  let fixture: ComponentFixture<EstadisticasTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasTareas],
    }).compileComponents();

    fixture = TestBed.createComponent(EstadisticasTareas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
