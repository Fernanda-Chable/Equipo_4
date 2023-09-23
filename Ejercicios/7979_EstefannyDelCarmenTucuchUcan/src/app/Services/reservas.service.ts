import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IReservas,} from '../Shared/data'; //{IReservas,Response}
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  apiUrl="https://crudcrud.com/api ";
  constructor(protected http:HttpClient){}

  list():Observable<Response>{
    return this.http.get<Response>(this.apiUrl);
  }

}
