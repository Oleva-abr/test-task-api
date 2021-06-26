import { NewServiceService } from '../shared/new-service.service';
import { Component, OnInit } from '@angular/core';
import { ArtWorks } from '../shared/new-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  artworks: ArtWorks[] = [];
  constructor(public arts: NewServiceService) {}
  ngOnInit(): void {
    this.arts.getArtList().subscribe((artworks) => {
      artworks = Object.entries(artworks);
      artworks = artworks[1];
      this.artworks = artworks[1];
    });
  }
}
