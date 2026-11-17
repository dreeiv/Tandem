import { Injectable, signal, computed, effect } from '@angular/core';

export interface Tarea {
  nombre: string;
  completada: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  tareas = signal<Tarea[]>([]);

  tareasCompletadas = computed(() => this.tareas().filter((tarea) => tarea.completada).length);

  tareasPendientes = computed(() => this.tareas().filter((tarea) => !tarea.completada).length);

  constructor() {
    effect(() => {
      console.log('Cantidad de tareas:', this.tareas().length);
    });
  }

  agregarTarea(nombre: string): void {
    this.tareas.update((tareasActuales) => [
      ...tareasActuales,
      {
        nombre: nombre,
        completada: false,
      },
    ]);
  }

  eliminarTarea(tarea: Tarea): void {
    this.tareas.update((tareasActuales) => {
      return tareasActuales.filter((elemento) => elemento !== tarea);
    });
  }

  cambiarEstado(tarea: Tarea): void {
    this.tareas.update((tareasActuales) =>
      tareasActuales.map((elemento) => {
        // Aquí irá nuestra condición.
        if (elemento === tarea) {
          return {
            ...elemento,
            completada: !elemento.completada,
          };
        }
        return elemento;
      }),
    );
  }
}
