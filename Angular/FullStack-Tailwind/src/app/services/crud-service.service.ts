import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Programmer } from '../models/programmer';
import { Observable } from 'rxjs';
import { CreateProgrammer } from '../models/create-programmer';

@Injectable({
  providedIn: 'root',
})
export class CrudServiceService {
  baseurl: string = 'https://localhost:7141/api/Programmer/';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Programmer[]>(this.baseurl);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseurl + id);
  }
  create(data: CreateProgrammer): Observable<CreateProgrammer> {
    return this.http.post<CreateProgrammer>(this.baseurl, data);
  }
  getById(id: number): Observable<CreateProgrammer> {
    return this.http.get<CreateProgrammer>(this.baseurl + id);
  }
  Update(id:number,data:CreateProgrammer):Observable<CreateProgrammer>{
    return this.http.put<CreateProgrammer>(this.baseurl+id,data);
  }
}
