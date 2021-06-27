import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArtWorks {
  id: number;
  title: string;
  category_titles: string;
  inscriptions: string;
  artist_title: string;
  date_display: string;
  image_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewServiceService {
  readonly APIUrl = 'https://api.artic.edu/api/v1';
  det: ArtWorks[] = [];
  constructor(public http: HttpClient) {}

  getArtList(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=title,id,image_id'
    );
  }
  getArtist(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=artist_title,image_id'
    );
  }
  getCategory(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl + '/artworks?fields=title,category_titles,image_id'
    );
  }
  getDetails(): Observable<any[]> {
    return this.http.get<any>(
      this.APIUrl +
        '/artworks/?fields=id,title,inscriptions,date_display,image_id'
    );
  }
}
