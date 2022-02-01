import { Component, OnInit } from '@angular/core';
import { Movie } from '../../Movie';
import { MovieService } from '../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  searchText: string = '';
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params)=>{
      if(params["searchTerm"]){
        this.onSearchButtonClick(params["searchTerm"]);
        console.log(params);
      }
    })
  }

  onClick(searchTerm: string){
    this.router.navigate(['search', searchTerm]);
  }

  ngOnInit(): void {}

  // (btnClick)="onSearchButtonClick()"
  onSearchButtonClick(search: string) {
    this.searchText = search;
    this.movieService
      .getSearchedMovies(this.searchText)
      .subscribe((dataArray) => {
        // const tempMovies: Array<Movie> = [];
  
        // console.log(typeof this.movies);

        // dataArray.Search.map((a: Movie)=>{
        //   console.log(a);
        // })

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

        console.log(dataArray.Search);
        this.movies = dataArray.Search;

      });
  }
}
