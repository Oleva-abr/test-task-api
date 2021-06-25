import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArtWorks {
  id: number;
  title: string;
  category_titles: string;
  inscriptions: string;
  artist_title: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  readonly APIUrl = 'https://api.artic.edu/api/v1';
  constructor(public http: HttpClient) {}

  getArtList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/artworks?fields=title');
  }
  getArtist(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=title,artist_title'
    );
  }
  getCategory(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=title,category_titles'
    );
  }
  getDescription(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=title,inscriptions'
    );
  }
}
