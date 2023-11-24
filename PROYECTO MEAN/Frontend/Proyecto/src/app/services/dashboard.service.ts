// dashboard.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private apiUrl = 'http://localhost:4000/api/dashboard'; // ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}

  getDashboardItems(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getReservationsStatistics(): Observable<any> {
    // Agrega lógica para obtener estadísticas de reservas desde el backend
    return this.http.get(`${this.apiUrl}/statistics`);
  }
  getStatistics() {
    return this.http.get('http://localhost:4000/api/dashboard/statistics');
  }
}
