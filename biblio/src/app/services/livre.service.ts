import { Injectable } from '@angular/core';
import { Livre } from '../models/livre.model';


@Injectable({
  providedIn: 'root'
})
export class LivreService {

  private livres: Livre[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', summary: 'Summary of Book 1', cover: 'Cover 1', isLent: false, lentTo: '', lentDate: new Date(), lentReturnDate: new Date() },
    { id: 2, title: 'Book 2', author: 'Author 2', summary: 'Summary of Book 2', cover: 'Cover 2', isLent: false, lentTo: '', lentDate: new Date(), lentReturnDate: new Date() },
    // Add more books as needed
  ];

  constructor() { }

  getLivres(): Livre[] {
    return this.livres;
  }

  getLivreById(id: number): Livre {
    const livre = this.livres.find(livre => livre.id === id);
    if (!livre) {
      throw new Error(`Livre with id ${id} not found`);
    }
    return livre;
  }
}
