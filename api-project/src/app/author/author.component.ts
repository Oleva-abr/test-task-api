import { Component, OnInit } from '@angular/core';
import { NewServiceService } from '../shared/servises/new-service.service';
import { ArtWorks } from '../shared/servises/new-service.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  searchArtist: string = '';
  authors: ArtWorks[] = [];
  constructor(public authorList: NewServiceService) {}

  ngOnInit(): void {
    this.authorList.getArtist().subscribe((authors) => {
      authors = Object.entries(authors);
      authors = authors[1];
      this.authors = authors[1];
    });
  }
}
