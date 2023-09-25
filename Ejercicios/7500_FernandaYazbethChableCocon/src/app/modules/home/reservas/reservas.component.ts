import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservasService } from 'src/app/Services/reservas.service';
import { IReservas } from 'src/app/shared/data';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent {
  Reservas: IReservas[] = [];
  nuevaReserva: IReservas = {
    description: '',
    date: '',
    status: ''
  };

  constructor(
    private dialog: MatDialog,
    private reservaservice: ReservasService
  ) {}

  ngOnInit() {
    // Llama al servicio para obtener los datos de la API de CRUD CRUD
    this.reservaservice.list().subscribe(response => {
      this.Reservas = [...response.Items];
    });
  }

  onSubmit() {
    // Llama al servicio para crear una nueva reserva
    this.reservaservice.create(this.nuevaReserva).subscribe(response => {
      // Agrega la nueva reserva a la lista de reservas
      this.Reservas.push(response);
      // Limpia el formulario
      this.nuevaReserva = {
        description: '',
        date: '',
        status: ''
      };
    });
  }
}