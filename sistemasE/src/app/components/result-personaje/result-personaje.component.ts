import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Re } from 'src/app/interfaces/personaje';
import { Result } from 'src/app/interfaces/preguntaPersonaje';
import { Resultadopreguntas } from 'src/app/interfaces/resultadoPreguntas';
import { PersonajeService } from 'src/app/services/personaje.service';
import { PreguntaxpersonajeService } from 'src/app/services/preguntaxpersonaje.service';

@Component({
  selector: 'app-result-personaje',
  templateUrl: './result-personaje.component.html',
  styleUrls: ['./result-personaje.component.css'],
})
export class ResultPersonajeComponent implements OnInit {
  nombre_jugador: string | null;

  //lista de preguntaxpersonaje
  listarPxp: Result[] = [];

  // resultado de preguntas
  resultadoPreguntas: Resultadopreguntas[];

  // id_personaje (coincide respuesta con preguntaxpersonaje)
  pxp: number[] = [];

  // se almacena el id que tiene mayor repeticiones
  numeroMasRepetidoRespuesta: number | null;

  //error si es nullo el id de getonepersonaje
  errorMensaje: string | null = null;

  //
  personajeFinal: Re[] = [];

  idPersonajes: any[] = [];

  constructor(
    private router: Router,
    private servicepxp: PreguntaxpersonajeService,
    private servicepersonaje: PersonajeService
  ) {}

  ngOnInit(): void {
    this.nombre_jugador = localStorage.getItem('nombrejugador');
    console.log(this.nombre_jugador);
    this.resultados();
    this.encontrarIdPersonaje();
  }

  resultados() {
    const respuestasString = localStorage.getItem('respuestas');

    if (respuestasString !== null) {
      this.resultadoPreguntas = JSON.parse(respuestasString);
    } else {
      console.log('no existe ningun objeto');
    }
    console.log(this.resultadoPreguntas);
  }

  encontrarIdPersonaje() {
    this.servicepxp.servicePXP().subscribe((data) => {
      this.listarPxp = data.result;
      //console.log(this.listarPxp);

      for (const respuesta of this.resultadoPreguntas) {
        const preguntaId: number = respuesta.id_pregunta;
        //console.log(preguntaId);
        const respuestaValor: number = respuesta.respuesta;
        //console.log(respuestaValor);

        for (const item of this.listarPxp) {
          if (
            item.id_pregunta === preguntaId &&
            item.respuesta === respuestaValor
          ) {
            this.pxp.push(item.id_personaje);
          }
        }
      }

      console.log(this.pxp);

      let conteo = new Map<number, number>();
      this.pxp.forEach((numero) => {
        if (conteo.has(numero)) {
          conteo.set(numero, conteo.get(numero)! + 1);
        } else {
          conteo.set(numero, 1);
        }
      });

      console.log(conteo);

      let frecuenciaMaxima = 0;

      for (const [numero, repeticion] of conteo) {
        if (repeticion > frecuenciaMaxima) {
          this.numeroMasRepetidoRespuesta = numero;
          frecuenciaMaxima = repeticion;
          //console.log(frecuenciaMaxima);
        }
      }

      console.log(
        `id del personaje que coincide: id ${this.numeroMasRepetidoRespuesta}`
      );
      if (this.numeroMasRepetidoRespuesta !== null) {
        this.personajeEncontrado(this.numeroMasRepetidoRespuesta);
      }
    });
  }

  personajeEncontrado(id: number | null) {
    if (id === null) {
      this.errorMensaje = 'No se encontró ningún personaje.';
    } else {
      this.servicepersonaje.getonepersonaje(id).subscribe((data) => {
        //console.log(data.res)
        this.personajeFinal = data.res;
        //console.log(this.personajeFinal);
      });
    }
  }

  volverjugar() {
    localStorage.clear();
    this.router.navigate(['/dashboard']);
  }
}
