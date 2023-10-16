import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preguntapersonaje } from '../interfaces/preguntaPersonaje';

@Injectable({
  providedIn: 'root',
})
export class PreguntaxpersonajeService {
  private preguntaxpersonaje: string;
  constructor(private http: HttpClient) {
    this.preguntaxpersonaje = 'http://localhost:3000/preguntaxjugador';
  }

  servicePXP(): Observable<Preguntapersonaje> {
    return this.http.get<Preguntapersonaje>(this.preguntaxpersonaje);
  }
}
