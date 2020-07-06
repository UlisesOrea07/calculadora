import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  resultadoJorge="";
  Numero=0;
  Numero2=0;
  resultadoFinal=0;
  operacion="";

  actualizarPantalla(numero){
    this.resultadoJorge += numero;
  }


  title = 'Calculadora';
  visible = false;
  numerosSeleccionados: string[] = [];
  numeros = [1, 2, 3, 4, 5, 6];
  valores = ['Borrar', 'x', '='];

  mostrarNumero( num: string ) {
    this.numerosSeleccionados.push(num);
  }

  numerosEliminados( num: string[] ) {
    this.numerosSeleccionados = num;
  }

  resultado( num: any ) {
    this.numerosSeleccionados = [];
    this.numerosSeleccionados.push(num);
  }

}
