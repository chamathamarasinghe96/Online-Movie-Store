import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  imdbID: string = '';
  movie: any = [];
  searchText!: string;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
  }
  
  ngOnInit(): void {
    console.log(this.route.snapshot.params)
    this.imdbID = this.route.snapshot.params['id'];
    this.searchText = this.route.snapshot.params["searchTerm"];
    
    this.movieService.getSelectedSingleMovie(this.imdbID).subscribe((MOVIE)=>{
      this.movie = MOVIE;
    })
  }
  
}
