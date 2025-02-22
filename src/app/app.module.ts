import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiprimercomponenteComponent } from './miprimercomponente/miprimercomponente.component';
import { FormsModule } from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Ejemplo3Component } from './ejemplo3/ejemplo3.component';
import { Ejemplo2Component } from './ejemplo2/ejemplo2.component';



//Todos los componentes que creemos en el proyecto se van a ir agregando al declarations, es decir, se estan agregando al modulo principal 
//y por lo tanto pertenecen a ese modulo. Con esto podemos utilizarlos e instanciarlos.

@NgModule({
  declarations: [
    AppComponent,
    MiprimercomponenteComponent, 
    EjemploComponent, 
    Ejemplo3Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ejemplo2Component,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] /*EL boostratp indica cual va a ser el modulo que va a inicar el proyecto */
})
export class AppModule { }
