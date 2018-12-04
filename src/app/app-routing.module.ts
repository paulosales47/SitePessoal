import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormacaoAcademicaComponent } from './formacao-academica/formacao-academica.component';
import { ExperienciaProfissionalComponent } from './experiencia-profissional/experiencia-profissional.component';
import { ResumoComponent } from './resumo/resumo.component';

const routes: Routes = [
   {path:'', component: ResumoComponent}
  ,{path:'FormacaoAcademica', component: FormacaoAcademicaComponent}
  ,{path:'ExperienciaProfissional', component: ExperienciaProfissionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
