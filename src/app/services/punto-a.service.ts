import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PuntoAService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '791eae930dmshcf3e4076d169587p145618jsn1727e3f13bd9',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com',
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(
      'https://imdb-top-100-movies.p.rapidapi.com/',
      httpOptions,
    );
  }
}
