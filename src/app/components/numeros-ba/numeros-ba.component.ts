import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeros-ba',
  templateUrl: './numeros-ba.component.html',
  styleUrls: ['./numeros-ba.component.css']
})
export class NumerosBAComponent implements OnInit {
  @Input() numeros: number[];
  @Output() numeroSeleccionado: EventEmitter<number>;

  constructor() {
    this.numeroSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  numeroPresionado( num: number ) {
    this.numeroSeleccionado.emit(num);
  }

}
