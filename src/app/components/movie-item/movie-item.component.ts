import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../Movie';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() searchText!: string;
  
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe()
  }

  ngOnInit(): void {}
  
}
