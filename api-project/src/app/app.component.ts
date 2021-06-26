// import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  artworksName: string = '';
  response: any;
  
  constructor(private http: HttpClient) {}
  search() {
    this.http
      .get(
        `https://api.artic.edu/api/v1/artworks/search?q=${this.artworksName}`
      )
      .subscribe((response) => {
        this.response = response;
        // console.log(this.response);
      });
  }
}
