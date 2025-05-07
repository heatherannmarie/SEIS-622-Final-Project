import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StaffBioService {
  constructor(private http: HttpClient) { }

  getStaffBio(filePath: string): Observable<any> {
    return this.http.get<any>(filePath);
  }
}