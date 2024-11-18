import { createAction, props } from '@ngrx/store';

export const loadImageUrl = createAction(
  '[Image] Load Image URL',
  props<{ imageUrl: string }>()
);

export const loadImageUrlSuccess = createAction(
  '[Image] Load Image URL Success',
  props<{ imageUrl: string }>()
);

export const loadImageUrlFailure = createAction(
  '[Image] Load Image URL Failure',
  props<{ error: any }>()
);
