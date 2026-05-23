import { Component } from '@angular/core';
import { PuntoBService } from '../../services/punto-b.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-b',
  imports: [CommonModule],
  templateUrl: './punto-b.component.html',
  styleUrl: './punto-b.component.css'
})
export class PuntoBComponent {

  marcas : Array<any> = [];
  modelos: Array<any> = [];
  id :string = "";
  marcaSeleccionada: any = null;

  constructor(private puntoBService: PuntoBService){
    this.obtenerMarcas();
  }

  obtenerMarcas(){
    this.puntoBService.getBrands().subscribe(
      (result: any) => {
        //console.log(result);
        this.marcas= result;
        console.log(this.marcas);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  obtenerModelos(id : string){
     this.marcaSeleccionada = this.marcas.find(m => m.id === id);
    this.puntoBService.getModels(id).subscribe(
      (result : any)=>{
        console.log(result);
        this.modelos=result;
      },
      (error : any)=>{
        console.log(error);
      }
    )
  }
}
