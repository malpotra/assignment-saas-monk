import { Component, OnInit } from '@angular/core';
import { MovieData } from '../common/movie-data';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  movies: MovieData[] = [];
  movie: any;
  reviewerName: string="";
  rating: number=7;
  comments: string="";


  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.appService.movieDropdown().subscribe(
      (response) => {
        this.movies = response;
      }, err => {
        console.log(err);
      }
    );
  }
  addNewReview() {
    console.log(this.movie);
    console.log(this.reviewerName);
    console.log(this.rating);
    console.log(this.comments);

    this.appService.saveReview(this.reviewerName,this.rating,this.comments,this.movie).subscribe(
      (response) => {
        if (response.message === undefined) {
          console.log("error");
        } else {
          alert("Movie reviewed successfully");
          this.router.navigateByUrl("/");
        }
      }, err => {
        console.log(err);
      }
    )
  }

}
