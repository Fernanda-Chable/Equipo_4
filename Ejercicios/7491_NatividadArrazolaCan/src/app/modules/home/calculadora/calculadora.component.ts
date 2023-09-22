import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  title = '7491_NatividadArrazolaCan';

  operandoA:number=0;
  operandoB:number=0;
  resultado:number=0;

  onSumar():void{
    this.resultado = this.operandoA + this.operandoB;
  }
}
