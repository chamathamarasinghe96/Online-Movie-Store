import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Movie';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSingleMovieClick(){
    this.router.navigate(['/single-movie'])
  }
}
