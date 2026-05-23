import { Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoEComponent } from './components/punto-e/punto-e.component';

export const routes: Routes = [
  { path: "", component: PuntoAComponent, pathMatch: "full" },
  { path: "puntoE", component: PuntoEComponent }
];
