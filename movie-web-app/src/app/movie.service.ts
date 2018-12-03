import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'c5dec52861d4a55e9fcc7cda5db1a092';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }


  getPopularMovies() {
  return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
}

  getActor(id: number) {
    return this._http.get(this.movie_url + 'person/' + id + '?api_key=' + this.api_key);
  }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }
}
