import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../interfaces/allpersonaje';

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  private rutagetall: string;
  private rutaonepersonaje: string;

  constructor(private http: HttpClient) {
    this.rutagetall = 'http://localhost:3000/personaje';
    this.rutaonepersonaje = 'http://localhost:3000/personaje/';
  }

  getallpersonaje(): Observable<Personaje> {
    return this.http.get<Personaje>(this.rutagetall);
  }

  getonepersonaje(id: number): Observable<Personaje> {
    return this.http.get<Personaje>(`${this.rutagetall}/${id}`);
  }
}
