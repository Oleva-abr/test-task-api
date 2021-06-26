import { Pipe, PipeTransform } from '@angular/core';
import { ArtWorks } from './servises/new-service.service';

@Pipe({
  name: 'searchArts',
})
export class SearchPipe implements PipeTransform {
  transform(arts: ArtWorks[], searchStr = ''): ArtWorks[] {
    if (!searchStr.trim()) {
      return arts;
    }

    return arts.filter((art) => {
      return art.title.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
}
