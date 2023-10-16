import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    books = [
        {
          title: 'Book Title 1',
          author: 'Author 1',
          summary: 'Summary of Book 1'
        },
        {
          title: 'Book Title 2',
          author: 'Author 2',
          summary: 'Summary of Book 2'
        },
        // Add more books here
      ];
}