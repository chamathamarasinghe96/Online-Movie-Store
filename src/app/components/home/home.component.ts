import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../Movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  movies: Movie[] = [];
  MOVIES: Array<Movie> = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  // (btnClick)="onSearchButtonClick()"
  onSearchButtonClick(search: string) {
    this.searchText = search;
    this.movieService
      .getSearchedMovies(this.searchText)
      .subscribe((MOVIES_LIST) => {
        const tempMovies: Array<Movie> = [];
        console.log(MOVIES_LIST.Search);
        // this.movies = MOVIES_LIST[1];
        // console.log(typeof this.movies);

        // this.MOVIES.map((m) => {
        //   const newMovie = {
        //     Title: m.Title,
        //     Year: m.Year,
        //     imdbID: m.imdbID,
        //     Type: m.Type,
        //     Poster: m.Poster,
        //   };

        //   tempMovies.push(newMovie);
        // });

        // this.movies = tempMovies;

        console.log(this.movies);
      });
  }
}
