import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-estadisticas-tareas',
  styleUrl: './estadisticas-tareas.css',
  templateUrl: './estadisticas-tareas.html',
})
export class EstadisticasTareas {
  @Input() completadas: number = 0;
  @Input() pendientes: number = 0;
}
