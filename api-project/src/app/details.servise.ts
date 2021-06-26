import { Injectable } from '@angular/core';
export interface Details {
  id: number;
}

@Injectable({ providedIn: 'root' })
export class DetailsService {
  det: Details[] = [];

  getById(id: number) {
    return this.det.find((d) => d.id === id);
  }
}
