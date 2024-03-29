import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  movieName: string="";
  releaseDate: any;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
  }
  addNewMovie() {
    console.log(this.movieName);
    console.log(this.releaseDate);
    this.appService.saveMovie(this.movieName,this.releaseDate).subscribe(
      (response) => {
        if (response.message === undefined) {
          console.log("error");
        } else {
          alert("Created movie successfully");
          this.router.navigateByUrl("/");
        }
      }, err => {
        console.log(err);
      }
    )
  }

}
