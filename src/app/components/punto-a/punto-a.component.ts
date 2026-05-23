import { Component } from '@angular/core';
import { PuntoAService } from '../../services/punto-a.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-a',
  imports: [CommonModule,FormsModule],
  templateUrl: './punto-a.component.html',
  styleUrl: './punto-a.component.css'
})
export class PuntoAComponent {
  peliculas : Array<any> = [];
  generos : Array<any> =[];

  constructor(private puntoAService : PuntoAService){
    this.obtenerPeliculas();
  }
  obtenerPeliculas(){
    this.puntoAService.getMovies().subscribe(
      (result : any)=>{
        console.log(result);
        this.peliculas = result;
        this.generos = result.genre;
      },
      (error: any) =>{
        console.log(error);
      }
    )
  }


}
