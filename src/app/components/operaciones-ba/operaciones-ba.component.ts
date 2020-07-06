import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operaciones-ba',
  templateUrl: './operaciones-ba.component.html',
  styleUrls: ['./operaciones-ba.component.css']
})
export class OperacionesBaComponent implements OnInit {
  @Output() numerosEliminados: EventEmitter<Array<string>>;
  @Output() resultado: EventEmitter<number>;
  @Input() valores: string[];
  @Input() numerosSeleccionados: string[];
  multiplicacion = 0;

  constructor() {
    this.numerosEliminados = new EventEmitter();
    this.resultado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  operacion( operacion: string ) {
    switch ( operacion ) {
      case 'Borrar':
        if ( this.numerosSeleccionados.length > 0 ) {
          this.numerosSeleccionados.pop();
          this.numerosEliminados.emit(this.numerosSeleccionados);
        }
        break;
      case 'x':
        this.numerosSeleccionados.push('x');
        break;
      case '=':
        let num1 = '';
        let num2 = '';
        let index = this.numerosSeleccionados.indexOf('x');
        let array1 = this.numerosSeleccionados.splice(0, index);
        array1.forEach( n => {
          num1 += n;
        });
        let array2 = this.numerosSeleccionados.splice(1, index);
        array2.forEach( n => {
          num2 += n;
        });
        this.numerosSeleccionados = [];
        console.log(this.numerosSeleccionados);

        this.multiplicacion = parseInt(num1) * parseInt(num2);
        console.log( this.multiplicacion );
        this.resultado.emit(this.multiplicacion);
    }
  }
}
