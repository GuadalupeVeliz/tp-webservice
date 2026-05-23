import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoBService {
  makeId:number = 0;

  constructor(private http : HttpClient) {

  }

  getBrands(): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'791eae930dmshcf3e4076d169587p145618jsn1727e3f13bd9',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    return this.http.get("https://car-specs.p.rapidapi.com/v2/cars/makes",httpOptions);
  }
  getModels(makeId: string): Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders({
        'x-rapidapi-key':'791eae930dmshcf3e4076d169587p145618jsn1727e3f13bd9',
        'x-rapidapi-host':'car-specs.p.rapidapi.com',
        'Content-Type':'application/json'
      })
    }
    return this.http.get("https://car-specs.p.rapidapi.com/v2/cars/makes/"+makeId+"/models",httpOptions);
  }


}
