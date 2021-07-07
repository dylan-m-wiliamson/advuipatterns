import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './effects/movie.effects';
import { MovieSorterComponent } from './components/movie-sorter/movie-sorter.component';
import { MoviedDraggableComponent } from './components/movied-draggable/movied-draggable.component';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BasicListComponent,
    MoviesComponent,
    MovieSorterComponent,
    MoviedDraggableComponent,
    MovieRecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
