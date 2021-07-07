import { createAction, props } from "@ngrx/store";
import { MovieModel } from "../reducers/movies.reducer";

export const loadMovies = createAction(
  '[app movies] load the movies'
);


export const loadMoviesSucceeded = createAction(
  '[app movies] load movies succeeded',
  props<{ payload: MovieModel[] }>()
);


export const movieReorderedInList = createAction(
  '[app movies] movie reordered in list',
  props<{
    payload: MovieReorder
  }>()
);

interface MovieReorder {
  fromIndex: number;
  toIndex: number;
}
