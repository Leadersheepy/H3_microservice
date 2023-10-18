import { Component } from '@angular/core';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent {
  livre: any = {};

  constructor(private livreService: LivreService) {}

  onSubmit() {
    this.livreService.addLivre(this.livre).subscribe(
      (response) => {
        // Gérer la réponse du serveur, par exemple, afficher un message de succès.
        console.log('Livre ajouté avec succès !');
      },
      (error) => {
        // Gérer les erreurs, par exemple, afficher un message d'erreur.
        console.error('Erreur lors de l\'ajout du livre : ' + error.message);
      }
    );
  }
}

