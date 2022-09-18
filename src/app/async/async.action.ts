import { createAction, props } from '@ngrx/store';

export const loadData = createAction(
  '[Async] Load Data'
);

export const loadDataSuccessfully = createAction(
  '[Async] Load Data Successfully',
  props<{ data: number }>()
);
