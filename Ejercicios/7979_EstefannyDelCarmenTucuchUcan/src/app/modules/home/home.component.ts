import { Component } from '@angular/core';
import { IModel, ICliente } from 'src/app/Shared/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clientes: ICliente[]=[];
}
