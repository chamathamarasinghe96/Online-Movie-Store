import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: Array<Movie> = [];
  @Input() searchText!: string;

  constructor() {}

  ngOnInit(): void {}

  setSearchedMovies() {}
}
