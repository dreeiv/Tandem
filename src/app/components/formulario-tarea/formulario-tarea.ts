import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulario-tarea',
  styleUrl: './formulario-tarea.css',
  templateUrl: './formulario-tarea.html',
})
export class FormularioTarea {
  textoTarea = '';

  @Output() agregar = new EventEmitter<string>();

  solicitarAgregar(): void {
  if (this.textoTarea.trim() === '') {
    return;
  }

  this.agregar.emit(this.textoTarea.trim());
  this.textoTarea = '';
}
}
