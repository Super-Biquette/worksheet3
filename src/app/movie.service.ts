import { Injectable } from '@angular/core';

export interface Movie{
    title: string;
    year: number;
    director: string;
}

@Injectable({
    providedIn: 'root'  
})
export class MovieService {
  movies: Movie[] = [
    {title:'Pacific Rim', year:2013, director:'Guillermo del Toro'},
    {title:'Transformers', year:2009, director:'Michael Bay'},
    {title:'Avengers: Endgame', year:2019, director:'The Russo brothers'},
    {title:'Avengers: Infinity War', year:2017, director:'The Russo brothers'},
    {title:'Cars 1', year:2010, director:'John Lasseter'}
  ];

  favourites: Movie[] = [];

  addToFavourites(movie: Movie) {
    if(!this.isFavourite(movie)){
    this.favourites.push(movie);
    }
  }

  removeFavourite(index: number) {
    this.favourites.splice(index,1);
  }

  isFavourite(movie:Movie): boolean{
    return this.favourites.includes(movie);
  }
}