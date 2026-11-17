import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Tarea, TareaService } from './services/tarea';
import { ListaTareas } from './components/lista-tareas/lista-tareas';
import { EstadisticasTareas } from './components/estadisticas-tareas/estadisticas-tareas';
import { FormularioTarea } from './components/formulario-tarea/formulario-tarea';

@Component({
  imports: [RouterOutlet, FormsModule, ListaTareas, EstadisticasTareas, FormularioTarea],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  constructor(public tareaService: TareaService) {}

  protected readonly title = signal('gestor-tareas');

  textoTarea = '';

  agregarTarea(nombre: string): void {
    this.tareaService.agregarTarea(nombre);
  }

  //"elemento" recorre el filter
  //void opcional / TypeScript infiere el tipo de retorno de la función
  eliminarTarea(tarea: Tarea): void {
    this.tareaService.eliminarTarea(tarea);
  }

  cambiarEstado(tarea: Tarea): void {
    this.tareaService.cambiarEstado(tarea);
  }

  contador = signal(0);

  incrementarContador(): void {
    this.contador.update((valor) => valor + 1);
  }
}
