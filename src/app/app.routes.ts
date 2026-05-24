import { Routes } from '@angular/router';
import { PuntoAComponent } from './components/punto-a/punto-a.component';
import { PuntoEComponent } from './components/punto-e/punto-e.component';
import { PuntoBComponent } from './components/punto-b/punto-b.component';
import { PuntoCComponent } from './components/punto-c/punto-c.component';
import { PuntoDComponent } from './components/punto-d/punto-d.component';

export const routes: Routes = [
  { path: "", component: PuntoAComponent, pathMatch: "full" },
  { path: 'puntoB', component: PuntoBComponent },
  { path: "puntoE", component: PuntoEComponent },
  { path: "puntoC", component: PuntoCComponent},
  { path: "puntoD", component: PuntoDComponent}
]
