import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../services/tarea';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-lista-tareas',
  styleUrl: './lista-tareas.css',
  templateUrl: './lista-tareas.html',
})
export class ListaTareas {
  @Input() tareas: Tarea[] = [];

  //Output para emitir un evento cuando se solicita la eliminación de una tarea
  @Output() eliminar = new EventEmitter<Tarea>();

  solicitarEliminacion(tarea: Tarea): void {
    this.eliminar.emit(tarea);
  }

  //Output para emitir un evento cuando se solicita cambiar el estado de una tarea
  @Output() cambiarEstado = new EventEmitter<Tarea>();

  solicitarCambioEstado(tarea: Tarea): void {
    this.cambiarEstado.emit(tarea);
  }
}