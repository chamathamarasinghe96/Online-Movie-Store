import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  search: string = '';

  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // this.movieService.getInitialMovies().subscribe((MOVIES) => {
    //   console.log(MOVIES);
    //   this.movies = MOVIES;
    // });
  }

  // keyup = 'onChangeEvent($event)';
  onChangeEvent(event: any) {
    console.log(event.target.value);
    this.movieService.getSearchedMovies(event.target.value).subscribe((e) => {
      // console.log(e);
    });
  }

  onClick(event: any): void {
    this.btnClick.emit(this.search);
    // console.log(event);
    // console.log(this.search);
  }
}
