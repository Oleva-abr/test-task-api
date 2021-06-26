import { Pipe, PipeTransform } from '@angular/core';
import { ArtWorks } from './servises/new-service.service';

@Pipe({
  name: 'searchAuthor',
})
export class AuthorsSearchPipe implements PipeTransform {
  transform(arts: ArtWorks[], searc = ''): ArtWorks[] {
    if (!searc.trim()) {
      return arts;
    }

    return arts.filter((art) => {
      return art.artist_title?.toLowerCase().includes(searc.toLowerCase());
    });
  }
}
