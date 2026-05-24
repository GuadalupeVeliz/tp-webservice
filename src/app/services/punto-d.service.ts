import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuntoDService {

  constructor(private http: HttpClient) { }

  getAudio(input:string, voice:string): Observable<any>{
    let httpOptions = {
      headers : new HttpHeaders({
        'x-rapidapi-key':'791eae930dmshcf3e4076d169587p145618jsn1727e3f13bd9',
        'x-rapidapi-host':'open-ai-text-to-speech1.p.rapidapi.com',
        'Content-Type':'application/json'
      }),
      responseType: 'arraybuffer' as 'json'
    }

    let body ={
      "model":"tts-1",
      "input":input,
      "instructions":"Speak in a lively and optimistic tone.",
      "voice":voice
    }
    return this.http.post('https://open-ai-text-to-speech1.p.rapidapi.com/',body,httpOptions);
  }
}
