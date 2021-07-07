import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { moviesSortedBy } from 'src/app/actions/movie-sorter.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-movie-sorter',
  templateUrl: './movie-sorter.component.html',
  styleUrls: ['./movie-sorter.component.css']
})
export class MovieSorterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  sortBy(what: 'title' | 'director' | 'yearReleased') {
    this.store.dispatch(moviesSortedBy({ payload: what }));
  }
}
