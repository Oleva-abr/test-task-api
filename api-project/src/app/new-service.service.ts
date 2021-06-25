import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArtWorks {
  id: number;
  title: string;
  category: string;
  description: string;
  author: string;
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
    return this.http.get<any>(this.APIUrl + '/artists');
  }
}
