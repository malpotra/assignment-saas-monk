import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDataComponent } from './movie-data/movie-data.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "movie", component: MovieDataComponent
  },
  {
    path: "addNewMovie", component: AddMovieComponent
  },
  {
    path: "addNewReview", component: AddReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
