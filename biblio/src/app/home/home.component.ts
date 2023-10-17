
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

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livres = this.livreService.getLivres();
  }

}
