import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getInitialMovies().subscribe((e) => {
      console.log(e);
    });
  }

  onChangeEvent(event: any) {
    console.log(event.target.value);
    this.movieService.getSearchedMovies(event.target.value).subscribe((e) => {
      console.log(e);
    });
  }
}
