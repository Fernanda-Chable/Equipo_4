import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IReservas,Response} from '../shared/data'; //Response
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  apiUrl="https://crudcrud.com/api/7b68a883927a4f9c9e5c843fd3bbcad2/Reservas ";
  constructor(protected http:HttpClient){}

  list():Observable<Response>{
    return this.http.get<Response>(this.apiUrl);
  }
  create(reserva: IReservas): Observable<IReservas> {
    return this.http.post<IReservas>(this.apiUrl, reserva);
  }
  

}
