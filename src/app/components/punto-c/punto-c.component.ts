import { Component } from '@angular/core';
import { PuntoCService } from '../../services/punto-c.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto-c',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-c.component.html',
  styleUrl: './punto-c.component.css'
})
export class PuntoCComponent {
  monedas : Array<any> = [];
  monedaOrigen: string ="";
  monedaDestino: string ="";
  cantidad : number = 0;
  resultado: number = 0;

  constructor(private puntoCService: PuntoCService){
    this.obtenerMonedas();
  }

  obtenerMonedas(){
    this.puntoCService.getMonedas().subscribe(
      (result: any)=>{
        //this.monedas= Object.entries(result.currencies);
        this.monedas =Object.entries(result.currencies).map(([code, name]) => ({ code, name }))
      },
      (error: any)=>{
        console.log(error)
      }
    )
  }
  convertir(){
    this.puntoCService.convert(this.monedaOrigen,this.monedaDestino,this.cantidad).subscribe(
      (result: any) => {
        console.log(result);
        this.resultado= result.result;
      },
      (error: any)=>{
        console.log(error);
      }
    )
  }
}
