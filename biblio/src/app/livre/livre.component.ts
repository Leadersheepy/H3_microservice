import { Component, OnInit } from '@angular/core';
import { Livre } from '../models/livre.model';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {
  livre: Livre | undefined; // Utilisez "undefined" pour indiquer qu'il peut être null ou non initialisé

  constructor(
    private livreService: LivreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const bookId = +this.route.snapshot.paramMap.get('id')!; // Ajoutez "!" pour indiquer que la valeur ne sera pas null
/*     this.livreService.getLivreById(bookId).subscribe(data => {
      this.livre = data;
    }); */
  }
}
