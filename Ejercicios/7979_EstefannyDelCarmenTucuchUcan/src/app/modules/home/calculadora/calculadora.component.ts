import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  titulo = 'Aplicacion de calculadora';
  valorUno: number = 0;
  valorDos: number = 0;
  resultado: number = 0;

  onSumar():void{
    this.resultado = this.valorUno + this.valorDos;
  }
}
