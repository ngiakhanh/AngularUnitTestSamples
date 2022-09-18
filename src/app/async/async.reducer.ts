import { createReducer } from "@ngrx/store";
import { FeatureState } from "./async.selector";

export const initialState: FeatureState = {
  counter: 2
};

export const asyncReducer = createReducer(
  initialState
);
