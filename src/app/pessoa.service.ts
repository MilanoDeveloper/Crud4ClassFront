import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/pessoa';

  constructor(private http: HttpClient) { }

  getPessoaById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
