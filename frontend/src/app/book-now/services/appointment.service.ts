import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AppointmentDay {
  date: string;
  appointments: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:3000/api/appointments';

  constructor(private http: HttpClient) { }

  getCalendar(): Observable<AppointmentDay[]> {
    return this.http.get<AppointmentDay[]>(this.apiUrl);
  }

  bookSlot(date: string, slot: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/book`, { date, slot });
  }
}