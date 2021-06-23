import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  public art: ArtWorks[] = [];
  constructor(private http: HttpClient) {}
  fetchTodos(): Observable<ArtWorks[]> {
    return this.http
      .get<ArtWorks[]>(
        'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display'
      )
      .pipe(tap((art) => (this.art = art)));
  }
}
