import { createAction, props } from "@ngrx/store";

export const moviesSortedBy = createAction(
  '[app movies-sorter] movies sorted by',
  props<{ payload: 'title' | 'director' | 'yearReleased' }>()
);
