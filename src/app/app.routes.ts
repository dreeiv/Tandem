import { Routes } from '@angular/router';
import { Tareas } from './pages/tareas/tareas';
import { AcercaDe } from './pages/acerca-de/acerca-de';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full',
  },
  {
    path: 'tareas',
    component: Tareas,
  },
  {
  path: 'acerca-de',
  component: AcercaDe
  }
];
