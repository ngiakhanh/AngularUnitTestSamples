import { createSelector } from '@ngrx/store';
import { asyncScheduler, of } from 'rxjs';

export interface FeatureState {
  counter: number;
}

export interface AppState {
  feature: FeatureState;
}

export const selectCounter = createSelector(
  (state: AppState) => state.feature,
  (state: FeatureState) => state.counter
);

