import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoEService {

  constructor(private _http: HttpClient) { }

  getWeatherByCityName(cityName: string): Observable<any> {
    const url = 'https://open-weather13.p.rapidapi.com/city';
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'cb3248b3e4mshcc7893fea728b6fp1044cejsnda64170dc028',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
        'Content-Type': 'application/json',
      }),
      params: new HttpParams()
        .set('city', cityName)
        .set('lang', 'ES')
    };

    return this._http.get(url, httpOptions);
  }

}