import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Jugador, Result } from 'src/app/interfaces/jugador';
import { JugadorService } from 'src/app/services/jugador.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  miFormulario: FormGroup;

  nombrejugador: string;
  jugadores: Jugador;
  Result: Result[] = [];

  constructor(
    private servicejugador: JugadorService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.miFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getJugadores();
  }

  getJugadores() {
    this.servicejugador.getJugadores().subscribe((data) => {
      this.jugadores = data;
      this.Result = this.jugadores.result;
      //console.log(this.Result[0]);
    });
  }

  mostrarnombre() {
    //console.log(this.nombrejugador);
    this.nombrejugador = this.miFormulario.value.nombre;

    // podemos transportar como parametro el nombre
    /* this.router.navigate([
      '/dashboard/personaje',
      { nombre: this.nombrejugador },
    ]); */

    //almacenar en el local storage una varible
    localStorage.setItem('nombrejugador', this.nombrejugador);
    this.router.navigate([
      '/dashboard/personaje',
    ]);
  }
}
