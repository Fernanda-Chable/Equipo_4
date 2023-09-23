import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicacion de calculadora';
  operandoA:number=0;
  operandoB:number=0;
  resultado:number=0;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
}
