import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private positions = new Map<string, number>();

  savePosition(route: string, position: number) {
    this.positions.set(route, position);
  }

  getPosition(route: string): number | undefined {
    return this.positions.get(route);
  }
}
