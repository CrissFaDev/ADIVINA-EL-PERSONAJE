import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Result } from 'src/app/interfaces/allpersonaje';


import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  nombre_jugador: string | null;

  result: Result[] = [];

  constructor(private router: ActivatedRoute , private ARouter: Router, private servicePersonaje: PersonajeService) {}

  ngOnInit(): void {
    this.listPersonajes()
  }

  mostrarParametro(){
    this.nombre_jugador = this.router.snapshot.paramMap.get('nombre');
    console.log(this.nombre_jugador);
  }

  listPersonajes(){
    this.servicePersonaje.getallpersonaje().subscribe((personaje) => {
      //console.log(personaje);
      this.result = personaje.result
      console.log(this.result);
    })
  }
  iniciar(){
    this.ARouter.navigate(['/dashboard/personaje/preguntas']);
  }


}
