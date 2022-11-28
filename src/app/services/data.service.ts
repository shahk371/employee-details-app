import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
