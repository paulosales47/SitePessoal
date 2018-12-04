import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormacaoAcademicaComponent } from './formacao-academica/formacao-academica.component';
import { ExperienciaProfissionalComponent } from './experiencia-profissional/experiencia-profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    FormacaoAcademicaComponent,
    ExperienciaProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
