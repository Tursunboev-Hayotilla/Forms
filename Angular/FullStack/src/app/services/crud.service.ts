import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Programmer } from '../models/programmer';
import { CerateProgrammer } from '../models/createprog';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseurl: string = 'https://localhost:7141/api/Programmer/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Programmer[]> {
    return this.http.get<Programmer[]>(this.baseurl);
  }

  create(data: CerateProgrammer): Observable<CerateProgrammer> {
    return this.http.post<CerateProgrammer>(this.baseurl, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseurl + id);
  }
  getById(id: number): Observable<CerateProgrammer> {
    return this.http.get<CerateProgrammer>(this.baseurl + id);
  }
  Update(id:number,data:CerateProgrammer):Observable<CerateProgrammer>{
    return this.http.put<CerateProgrammer>(this.baseurl+id,data);
  }
}
