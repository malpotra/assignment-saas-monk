import { Component, OnInit } from '@angular/core';
import { MovieData } from '../common/movie-data';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userInputForMovieSearch: string ="";
  movieList: MovieData[] = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.movieListing().subscribe(
      (response) => {
        if (response.length !== undefined) {
          this.movieList = response;
        } else {
          console.log("An error occurred");
        }
      }, err => {
        console.log(err);
      }
    );
  }
  getMatchingMovies() {
    console.log("Matching movies found");
  }
  editMovie(i: number) {
    console.log("edited movie");
  }
  deleteMovie(i: number) {
    console.log("deleted movie");
  }
  cardClicked(i: number) {
    console.log("cardopend");
  }

}
