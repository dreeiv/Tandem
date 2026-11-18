import { Component } from '@angular/core';
import { FormularioTarea } from '../../components/formulario-tarea/formulario-tarea';
import { ListaTareas } from '../../components/lista-tareas/lista-tareas';
import { EstadisticasTareas } from '../../components/estadisticas-tareas/estadisticas-tareas';
import { TareaService } from '../../services/tarea';
import { Tarea} from '../../services/tarea';

@Component({
  imports: [FormularioTarea, ListaTareas, EstadisticasTareas],
  selector: 'app-tareas',
  styleUrl: './tareas.css',
  templateUrl: './tareas.html',
})
export class Tareas {
  constructor(public tareaService: TareaService) {}

  agregarTarea(nombre: string): void {
    this.tareaService.agregarTarea(nombre);
  }

  eliminarTarea(tarea: Tarea): void {
    this.tareaService.eliminarTarea(tarea);
  }

  cambiarEstado(tarea: Tarea): void {
    this.tareaService.cambiarEstado(tarea);
  }
}
