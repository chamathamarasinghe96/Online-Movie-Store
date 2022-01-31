import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HomeComponent } from './components/home/home.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'single-movie', component: SingleMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MovieItemComponent,
    MoviesComponent,
    SearchFormComponent,
    HomeComponent,
    SingleMovieComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
