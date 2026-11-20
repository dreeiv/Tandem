import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-detalle-tarea',
  styleUrl: './detalle-tarea.css',
  templateUrl: './detalle-tarea.html',
})
export class DetalleTarea {
  idTarea: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.idTarea = this.route.snapshot.paramMap.get('id');
  }
}
