import { createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import * as ImageActions from './image.actions';

export interface ImageState {
  imageUrl: string;
}

export const initialState: ImageState = {
  imageUrl: '',
};

export const imageReducer = createReducer(
  initialState,
  on(ImageActions.loadImageUrlSuccess, (state, { imageUrl }) => ({ ...state, imageUrl })),
  on(ImageActions.loadImageUrlFailure, (state) => ({ ...state, imageUrl: '' }))
);

export const selectImageFeature = createFeatureSelector<ImageState>('image');
export const selectImageUrl = createSelector(
  selectImageFeature,
  (state: ImageState) => state.imageUrl
);

export default imageReducer;
