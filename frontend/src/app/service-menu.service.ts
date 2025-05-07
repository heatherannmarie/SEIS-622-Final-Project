import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceMenuService {
constructor(private http: HttpClient) {}

  getServices(filePath: string): Observable<any> {
    return this.http.get<any>(filePath);
  }
}