import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ImageService } from './image.service';
import * as ImageActions from './image.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ImageEffects {
 loadImageUrl$ = createEffect(() =>
  this.actions$.pipe(
   ofType(ImageActions.loadImageUrl),
   mergeMap((action) =>
    this.imageService.getImageUrl(action.imageUrl).pipe(
     map((imageUrl) => ImageActions.loadImageUrlSuccess({ imageUrl })),
     catchError((error) => of(ImageActions.loadImageUrlFailure({ error })))
    )
   )
  )
 );

 constructor(private actions$: Actions, private imageService: ImageService) { }
}
