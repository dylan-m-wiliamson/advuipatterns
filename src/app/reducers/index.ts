import { ActionReducerMap, createSelector } from "@ngrx/store";

import * as fromMovies from './movies.reducer';
import * as fromMoviesSort from './movies-sort-by.reducer'

export interface AppState {
  movies: fromMovies.MovieState;
  moviesSort: fromMoviesSort.MoviesSortByState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: fromMovies.reducer,
  moviesSort: fromMoviesSort.reducer,
};


// 1. Feature selector (if you are in a feature, we are not.

// 2. Selector per "branch" of your application state.
const selectMoviesBranch = (state: AppState) => state.movies;
const selectMovieSortBranch = (state: AppState) => state.moviesSort;

// 3. "Helpers" (optional)

const { selectAll: selectMovieArrayUnsorted, selectEntities: selectMovieEntities } = fromMovies.adapter.getSelectors(selectMoviesBranch);

const selectMovieSortKeys = createSelector(
  selectMoviesBranch,
  b => b.sortKeys
);


const selectSortingBy = createSelector(
  selectMovieSortBranch,
  b => b.sortBy
);
// 4. What your components need to know

export const selectManualSortedMovies = createSelector(
  selectMovieEntities,
  selectMovieSortKeys,
  (movies, sortKeys) => sortKeys.map(k => movies[k])
);

export const selectMovieArray = createSelector(
  selectMovieArrayUnsorted, // 1
  selectSortingBy, // 2
  (movies, sortBy) => {
    return [...movies.sort((lhs: fromMovies.MovieModel, rhs: fromMovies.MovieModel) => {
      if (lhs[sortBy] < rhs[sortBy]) {
        return -1;
      }
      if (lhs[sortBy] > rhs[sortBy]) {
        return 1;
      }
      return 0;
    }
    )];
  }
);
