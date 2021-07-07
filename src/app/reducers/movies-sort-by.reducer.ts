import { Action, on, createReducer } from "@ngrx/store";
import * as actions from '../actions/movie-sorter.actions';

export interface MoviesSortByState {
  sortBy: 'title' | 'director' | 'yearReleased';
}

const initialState: MoviesSortByState = {
  sortBy: 'title'
};

const myReducer = createReducer(
  initialState,
  on(actions.moviesSortedBy, (s, a) => ({ ...s, sortBy: a.payload }))
);

export function reducer(state: MoviesSortByState = initialState, action: Action): MoviesSortByState {
  return myReducer(state, action);
}


