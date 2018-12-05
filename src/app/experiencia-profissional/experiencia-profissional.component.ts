import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-experiencia-profissional',
  templateUrl: './experiencia-profissional.component.html',
  styleUrls: ['./experiencia-profissional.component.css'],
  animations: [
    trigger('animacao-experiencia-1',
    [
      state('criado', style({'opacity': 1})),
      transition('void => criado', [style({'opacity': 0, transform: 'translate(-100px, 0px)'}), animate('1500ms ease-in-out')])
    ])
    // ,
    // trigger('animacao-experiencia-2',
    // [
    //   state('criado', style({'opacity': 1})),
    //   transition('void => criado', [style({'opacity': 0, transform: 'translate(100px, 0px)'}), animate('1500ms ease-in-out')])
    // ])
    // ,
    // trigger('animacao-experiencia-3',
    // [
    //   state('criado', style({'opacity': 1})),
    //   transition('void => criado', [style({'opacity': 0, transform: 'translate(-100px, 0px)'}), animate('1500ms ease-in-out')])
    // ])
    // ,
    // trigger('animacao-experiencia-4',
    // [
    //   state('criado', style({'opacity': 1})),
    //   transition('void => criado', [style({'opacity': 0, transform: 'translate(100px, 0px)'}), animate('1500ms ease-in-out')])
    // ])
  ]
})
export class ExperienciaProfissionalComponent implements OnInit {

  public estadoExperiencia1: string
  public estadoExperiencia2: string
  public estadoExperiencia3: string
  public estadoExperiencia4: string
  
  constructor() {
    
   }

  ngOnInit() {


    
  }
}
