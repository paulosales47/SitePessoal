import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({height: '200px', opacity: 1, backgroundColor: 'yellow' })),
      state('closed', style({ height: '100px', opacity: 0.5, backgroundColor: 'green' })),
      transition('open => closed', [ animate('1s') ]),
      transition('closed => open', [ animate('0.5s')]),
    ]),
  ],
})
export class ResumoComponent implements OnInit {
  isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
