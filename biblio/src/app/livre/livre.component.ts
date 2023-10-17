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
  livre!: Livre; // Add ! to indicate that livre will be initialized later

  constructor(
    private livreService: LivreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const bookId = +this.route.snapshot.paramMap.get('id')!; // Add ! to indicate that the value will not be null
    this.livre = this.livreService.getLivreById(bookId); // Fix typo in method name
  }
}

