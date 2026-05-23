import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PuntoAComponent } from './components/punto-a/punto-a.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, FooterComponent,PuntoAComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp-webservice-4317';
}
