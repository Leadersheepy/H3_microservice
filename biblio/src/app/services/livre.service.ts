import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importez HttpClient pour effectuer des requêtes HTTP
import { Observable } from 'rxjs'; // Importez Observable pour gérer les données asynchrones
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private apiUrl = 'http://localhost:3000'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des livres depuis votre API
  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.apiUrl}/livres`);
  }

  // Méthode pour récupérer un livre par son ID depuis votre API
  getLivreById(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiUrl}/livres/${id}`);
  }
}
