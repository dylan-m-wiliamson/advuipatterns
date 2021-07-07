import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/movies.actions';

export interface MovieModel {
  id: string;
  title: string;
  director: string;
  yearReleased: number;
}

export interface MovieState extends EntityState<MovieModel> {
  sortKeys: string[];
}

export const adapter = createEntityAdapter<MovieModel>({

});

const initialState = adapter.getInitialState({
  sortKeys: [''] // TODO: Why??!?!?
});

const myReducer = createReducer(
  initialState,
  on(actions.loadMoviesSucceeded, (state, action) => {
    const ids = action.payload.map(movie => movie.id);
    return adapter.setAll(action.payload, { ...state, sortKeys: ids });
  }),
  on(actions.movieReorderedInList, (state, action) => {
    return ({ ...state, sortKeys: swapItems(state.sortKeys, action.payload.fromIndex, action.payload.toIndex) });
  })

);

export function reducer(state: MovieState | undefined, action: Action): MovieState {
  return myReducer(state, action);
}



function swapItems(items: string[], fromIndex: number, toIndex: number): string[] {
  const results = items.slice();
  const firstItem = items[fromIndex];
  results[fromIndex] = items[toIndex];
  results[toIndex] = firstItem;
  return results
}

