import { Component } from '@angular/core';
import { PuntoEService } from '../../services/punto-e.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CiudadData {
  nombre: string;
  temperatura: { actual: number; minima: number; maxima: number; }
  codigoPais: string,
  clima: { descripcion: string; icono: string; main: string; }
}

@Component({
  selector: 'app-punto-e',
  imports: [CommonModule, FormsModule],
  templateUrl: './punto-e.component.html',
  styleUrl: './punto-e.component.css'
})
export class PuntoEComponent {

  urlBaseImg: string = "https://openweathermap.org/payload/api/media/file/";
  cityName: string = "";
  cargando: boolean = false;
  ciudad: CiudadData | null = null;
  ciudadNoEncontrada: boolean = false;

  constructor(private _weatherService: PuntoEService) { }

  buscarCiudad(): void {
    const cityName = this.cityName;
    this.cargando = true;
    this.ciudadNoEncontrada = false;
    this._weatherService.getWeatherByCityName(cityName).subscribe(
      (result: any) => {
        console.log(result)
        if (result.cod === 200) {
          const ciudadData: CiudadData = {
            nombre: result.name,
            temperatura: {
              actual: this.convertirACelsius(result.main.temp),
              minima: this.convertirACelsius(result.main.temp_min),
              maxima: this.convertirACelsius(result.main.temp_max)
            },
            codigoPais: result.sys.country,
            clima: {
              main: result.weather[0].main,
              descripcion: result.weather[0].description,
              icono: this.urlBaseImg + result.weather[0].icon + ".png"
            }
          }
          this.ciudad = ciudadData;
          console.log(this.ciudad);
        }
        if (result.cod === '404') {
          this.ciudadNoEncontrada = true;
          this.ciudad = null;
        }
        this.cargando = false;
      },
      (error: any) => {
        this.cargando = false;
        console.log(error);
      }
    )
  }
  
  convertirACelsius(temp: number): number {
    return Math.round((temp - 32) * 5 / 9);
  }

}
