import { Injectable } from '@angular/core';
import { of, Observable, from, shareReplay } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ImageService {
  getImageUrl(imageUrl: string): Observable<string> {
    return from(fetch(imageUrl))
      .pipe(
        map(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.url;
        }),
        catchError(error => {
          console.error('Error loading image:', error);
          return of('');
        }),
        shareReplay(1)
      );
  }
}
