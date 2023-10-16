import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

import { ResultPersonajeComponent } from './components/result-personaje/result-personaje.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/personaje', component: PersonajesComponent },
  {path: 'dashboard/personaje/preguntas', component: PreguntasComponent},
  { path: 'dashboard/personaje/complete', component: ResultPersonajeComponent },
  
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
