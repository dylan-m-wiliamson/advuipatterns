import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicListComponent } from './components/basic-list/basic-list.component';
import { HomeComponent } from './components/home/home.component';
import { MovieRecommendationsComponent } from './components/movie-recommendations/movie-recommendations.component';
import { MoviedDraggableComponent } from './components/movied-draggable/movied-draggable.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'basic-list',
    component: BasicListComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies-draggable',
    component: MoviedDraggableComponent
  },
  {
    path: 'movie-recommentations',
    component: MovieRecommendationsComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
