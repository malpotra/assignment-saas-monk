package com.example.assignment;

import com.example.assignment.Movie;
import com.example.assignment.MovieView;
import com.example.assignment.Review;
import com.example.assignment.MovieRepository;
import com.example.assignment.MovieViewRepository;
import com.example.assignment.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path="/application")
public class AppController {
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private MovieViewRepository movieViewRepository;

    @Autowired
    private ReviewRepository reviewRepository;



    @PostMapping(path="/movie")
    public @ResponseBody HashMap<String,String> addNewMovie (@RequestParam String name
            , @RequestParam Date date) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        Movie movie = new Movie();
        movie.setName(name);
        movie.setReleaseDate(date);
        movieRepository.save(movie);
        HashMap <String,String> map = new HashMap<>();
        map.put("message", "saved");
        return map;
    }

    @GetMapping(path="/home", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<MovieView> getAllMoviesWithRatings() {
        return movieViewRepository.findAll();
    }
    @GetMapping(path="/movies", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody Iterable<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @PostMapping(path="/review")
    public @ResponseBody HashMap<String,String> addNewReview(@RequestParam String reviewerName,
                                             @RequestParam Integer rating,
                                             @RequestParam String comments, @RequestBody Movie movie) {
        Review review = new Review();
        review.setReviewerName(reviewerName);
        review.setComments(comments);
        review.setRating(rating);
        review.setMovie(movie);
        reviewRepository.save(review);
        HashMap <String,String> map = new HashMap<>();
        map.put("message", "saved");
        return map;
    }
}