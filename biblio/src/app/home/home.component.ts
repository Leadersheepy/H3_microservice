import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  livres: Livre[] = [];
  public randomImage: string;

  constructor(private livreService: LivreService) {
    const imageFolder = 'assets/images';
    const imageList = ['microservice1.jpg', 'microservice2.jpg', 'microservice3.jpg','microservice4.jpg']; // Liste de noms d'images
    const randomIndex = Math.floor(Math.random() * imageList.length);
    this.randomImage = `${imageFolder}/${imageList[randomIndex]}`;
  }

  ngOnInit(): void {
    this.livreService.getLivres().subscribe(data => {
      this.livres = data;
      console.log("allo", this.livres);
    });
  }

}
