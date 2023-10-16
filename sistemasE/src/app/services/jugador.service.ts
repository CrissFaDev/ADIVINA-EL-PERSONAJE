import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../interfaces/jugador';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {
 
  private getruta :string;
  private rutaPost: string;
  
  constructor(private http: HttpClient) {
    this.getruta = "http://localhost:3000/jugador";
    this.rutaPost = 'http://localhost:3000/jugador';
  }

  getJugadores(): Observable<Jugador>{
    return this.http.get<Jugador>(this.getruta);
  }
}
