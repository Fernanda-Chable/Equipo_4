import { Component } from '@angular/core';
import{IReservas, } from 'src/app/shared/data'
import{ReservasService} from 'src/app//Services/reservas.service';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  Reservas: IReservas[] = [];
  
  constructor(
    private dialog : MatDialog,
    private reservaservice: ReservasService){
    this.reservaservice.list().subscribe( response =>{
      this.Reservas =[...response.Items];

      console.log(this.Reservas);

    })
  
  

} 

}
