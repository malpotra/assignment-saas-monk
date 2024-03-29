import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-critic';
  constructor(private router: Router) {}
  addNewMovie() {
    console.log("Add movie");
    this.router.navigateByUrl("/addNewMovie");
  }

  addNewReview() {
    console.log("Add review");
    this.router.navigateByUrl("/addNewReview")
  }
  goToHome() {
    this.router.navigateByUrl("/");
  }
}
