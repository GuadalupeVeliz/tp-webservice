import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoCService {

  constructor(private http: HttpClient) {

  }

  getMonedas(): Observable<any>{
    let httpOptions= {
      headers: new HttpHeaders({
      'apikey':'ms7ydSj39rZXQvogH2UyFLZM7Uty3Jjo'
    })
  }
    return this.http.get("https://api.apilayer.com/currency_data/list",httpOptions);
  }

  convert(idOrigen: string, idDestino: string,cantidad: number): Observable<any>{
    let httpOptions ={
      headers : new HttpHeaders({
        'apikey':'ms7ydSj39rZXQvogH2UyFLZM7Uty3Jjo'
      })
    }
    return this.http.get("https://api.apilayer.com/currency_data/convert?to="+idDestino+"&from="+idOrigen+"&amount="+cantidad,httpOptions);
  }
}
