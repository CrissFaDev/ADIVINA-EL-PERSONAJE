import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta } from '../interfaces/pregunta';

@Injectable({
  providedIn: 'root',
})
export class PreguntaService {
  private getruta: string;

  constructor(private http: HttpClient) {
    this.getruta = 'http://localhost:3000/pregunta';
  }

  servicegetpreguntas(): Observable<Pregunta> {
    return this.http.get<Pregunta>(this.getruta);
  }
}
