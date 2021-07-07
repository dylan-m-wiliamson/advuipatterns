import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadMovies, movieReorderedInList } from 'src/app/actions/movies.actions';
import { AppState, selectManualSortedMovies } from 'src/app/reducers';
import { MovieModel } from 'src/app/reducers/movies.reducer';

@Component({
  selector: 'app-movied-draggable',
  templateUrl: './movied-draggable.component.html',
  styleUrls: ['./movied-draggable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviedDraggableComponent implements OnInit {

  movies$!: Observable<(MovieModel | undefined)[]>;
  constructor(private store: Store<AppState>) {

    this.store.dispatch(loadMovies());
  }

  ngOnInit(): void {
    this.movies$ = this.store.select(selectManualSortedMovies)
  }


  drop(event: any) {
    this.store.dispatch(movieReorderedInList({ payload: { fromIndex: event.previousIndex, toIndex: event.currentIndex } }));
  }
}
