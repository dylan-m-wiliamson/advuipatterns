import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from "../actions/movies.actions";
import { map } from 'rxjs/operators';
import { MovieModel } from "../reducers/movies.reducer";
@Injectable()
export class MovieEffects {


  readonly fakeData: MovieModel[] =
    [
      {
        id: '1', title: 'The Matrix', director: 'Wachowski', yearReleased: 1999,
      },
      {
        id: '2', title: 'Star Wars IV: A New Hope', director: 'Lucas', yearReleased: 1977,
      },
      {
        id: '3', title: 'Thor: Ragnorak', director: 'Waititi', yearReleased: 2013
      },
      {
        id: '4', title: 'AAA', director: 'ZZ', yearReleased: 1969
      },
      {
        id: '5', title: 'ZZZ', director: 'AAAA', yearReleased: 2021
      }
    ];

  // actions.loadMovies => (???) => actions.loadMoviesSuceeded
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadMovies),
      map(() => this.fakeData),
      map((payload) => actions.loadMoviesSucceeded({ payload })

      )
    )
  );


  constructor(private actions$: Actions) { }

}
