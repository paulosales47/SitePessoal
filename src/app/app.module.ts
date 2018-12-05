import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormacaoAcademicaComponent } from './formacao-academica/formacao-academica.component';
import { ExperienciaProfissionalComponent } from './experiencia-profissional/experiencia-profissional.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ResumoComponent } from './resumo/resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    FormacaoAcademicaComponent,
    ExperienciaProfissionalComponent,
    TopoComponent,
    RodapeComponent,
    ResumoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
