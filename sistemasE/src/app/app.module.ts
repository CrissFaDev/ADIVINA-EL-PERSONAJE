import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ResultPersonajeComponent } from './components/result-personaje/result-personaje.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonajesComponent,
    ResultPersonajeComponent,
    PreguntasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
