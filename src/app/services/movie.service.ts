import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiURL = 'http://www.omdbapi.com/?apikey=d349d367';

  constructor(private httpClient: HttpClient) {}

  getInitialMovies(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}&s=batman`);
  }

  getSearchedMovies(name: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}&s=${name}`);
  }
}
