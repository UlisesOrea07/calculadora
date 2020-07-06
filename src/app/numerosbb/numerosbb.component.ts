import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numerosbb',
  templateUrl: './numerosbb.component.html',
  styleUrls: ['./numerosbb.component.css']
})
export class NumerosbbComponent implements OnInit {
   
  valor= String;
  @Input() numero;
  @Output() mostrarNumero = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.valor= this.numero;
  }
  enviarNumero(){
    this.mostrarNumero.emit(this.valor)
  }
}
