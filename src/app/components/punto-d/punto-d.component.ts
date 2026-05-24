import { FormsModule } from '@angular/forms';
import { PuntoDService } from './../../services/punto-d.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto-d',
  imports: [FormsModule,CommonModule],
  templateUrl: './punto-d.component.html',
  styleUrl: './punto-d.component.css'
})
export class PuntoDComponent {
  texto:string ="";
  voz : string ="alloy";
  voces = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
  cargandoAudio: boolean = false;

  constructor(private puntoDService: PuntoDService ){

  }

  obtenerAudio(){
    this.cargandoAudio = true;
    this.puntoDService.getAudio(this.texto,this.voz).subscribe(
      (result: any) => {
        const blob = new Blob([result], { type: 'audio/mpeg' });
        const url = URL.createObjectURL(blob);

        const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
        audioPlayer.src = url;
        audioPlayer.load();
        audioPlayer.oncanplay = () => {
        this.cargandoAudio = false;
        };
      },
      (error: any) => {
        console.log(error);
        this.cargandoAudio = false;
      }
    )
  }

}
