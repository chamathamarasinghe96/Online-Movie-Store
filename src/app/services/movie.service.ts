import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../Movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiURL = 'http://www.omdbapi.com/?apikey=d349d367';

  constructor(private httpClient: HttpClient) {}

  getInitialMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiURL}&s=batman`);
  }

  getSearchedMovies(name: string): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.apiURL}&s=${name}`);
  }
}
