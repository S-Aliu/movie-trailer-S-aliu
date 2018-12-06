import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  popular_movies: any;
  search_result: any;
  movie: any;



  constructor(public movieService: MovieService) {
    //get pop movies
    // get pop movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];

    });


  }


  // search function to collect search results
  searchMovie() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
    });
  }

  ngOnInit() {
  }

}
