import { Injectable } from '@angular/core';
import { MovieData } from './common/movie-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  path: string = "http://ec2-13-233-73-50.ap-south-1.compute.amazonaws.com:4201/application/";
  constructor(private http: HttpClient) { }


  movieListing() : Observable<MovieData[]| any> {
    return this.http.get(
      this.path + "home"
    );
    // return [
    //   {id: 1,name: "LOTR",releaseDate: "01/02/2000", averageRating: 9.5},
    //   {id: 2,name: "The Avengers",releaseDate: "01/02/2012", averageRating: 8.5},
    //   // {id: 3,name: "Dune",releaseDate: "01/02/2024", averageRating: 9.0},
    // ].slice();
  }
  movieDropdown() : Observable<MovieData[]| any> {
    return this.http.get(
      this.path + "movies"
    );
    // return [
    //   {id: 1,name: "LOTR",releaseDate: "01/02/2000", averageRating: 9.5},
    //   {id: 2,name: "The Avengers",releaseDate: "01/02/2012", averageRating: 8.5},
    //   // {id: 3,name: "Dune",releaseDate: "01/02/2024", averageRating: 9.0},
    // ].slice();
  }

  saveMovie (name: string, date: Date): Observable<string|any> {
    return this.http.post(
      this.path + "movie",
      '',
      {
        params: new HttpParams().set("name", name).set("date", date.toString())
      }
    );
  }

  saveReview (name: string, rating: number, comments: string, movie: any): Observable<string|any> {
    return this.http.post(
      this.path + "review",
      movie,
      {
        params: 
          new HttpParams()
          .set("reviewerName", name)
          .set("rating", rating)
          .set("comments", comments)
      }
    );
  }
}
