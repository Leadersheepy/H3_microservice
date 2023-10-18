import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from '../models/livre.model';

@Injectable()
export class LivreService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.apiUrl}/livres`);
  }

  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiUrl}/livres/${id}`);
  }

  addLivre(livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(`${this.apiUrl}/livres`, livre);
  }

  updateLivre(livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.apiUrl}/livres/${livre.id}`, livre);
  }

  deleteLivre(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/livres/${id}`);
  }
}
