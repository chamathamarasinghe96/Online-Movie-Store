import { Component, OnInit } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private searchForm: SearchFormComponent) {}

  ngOnInit(): void {}

  setSearchedMovies() {
    this.movies = this.searchForm.movies;
  }
}
