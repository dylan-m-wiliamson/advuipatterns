import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovies } from 'src/app/actions/movies.actions';
import { AppState, selectMovieArray } from 'src/app/reducers';
import { MovieModel } from 'src/app/reducers/movies.reducer';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {

  movies$!: Observable<MovieModel[]>;

  constructor(private store: Store<AppState>) {
    store.dispatch(loadMovies())
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectMovieArray);
  }

}
