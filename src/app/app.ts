import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieService, Movie } from './movie.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(public movieService: MovieService) {}

  addToFavourites(movie: Movie){
    this.movieService.addToFavourites(movie);
  }

  removeFavourite(index: number) {
    this.movieService.removeFavourite(index);
  }

  isFavourite(movie: Movie): boolean{
    return this.movieService.isFavourite(movie)
  }
}
