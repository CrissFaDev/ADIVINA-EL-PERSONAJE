import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resut } from 'src/app/interfaces/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { shuffle } from 'lodash'; 

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css'],
})
export class PreguntasComponent implements OnInit {
  respuestas: { id_pregunta: number; respuesta: string }[] = [];
  preguntaActual: number = 0;
  formularioCompletado: boolean = false;

  listpregunta: Resut[] = [];

  constructor(
    private servicepregunta: PreguntaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarallPregunta();
  }

  listarallPregunta() {
    this.servicepregunta.servicegetpreguntas().subscribe((pregunta) => {
      this.listpregunta = pregunta.resut;
      this.listpregunta = shuffle(this.listpregunta);
      //console.log(this.listpregunta);
    });
  }

  siguientePregunta() {
    if (this.preguntaActual < this.listpregunta.length - 1) {
      // Verificar si se proporcionó una respuesta para la pregunta actual
      if (this.respuestas[this.preguntaActual] != null) {
        this.preguntaActual++;
      } else {
        alert('Debes proporcionar una respuesta antes de continuar.');
      }
    }

    // Verificar si se han proporcionado respuestas para todas las preguntas
    if (this.respuestas.length === this.listpregunta.length) {
      //console.log(this.respuestas);
      console.log('formulario completado');
      this.formularioCompletado = true;
    }
  }


  resultado() {
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
     this.router.navigate([
      '/dashboard/personaje/complete',{
  }]); 
  }
}
