import { Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';

export const routes: Routes = [
  {path:'', component: PuntoAComponent, pathMatch: "full"},
  {path:'puntoB', component:PuntoBComponent}
];
