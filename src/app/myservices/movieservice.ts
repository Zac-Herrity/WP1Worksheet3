import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movieservice {
  private _movies =signal([
    {"title": "Fantastic Mr Fox", "year": 2009, "director": "Wes Anderson"},
    {"title": "Heat", "year": 1995, "director": "Michael Mann"},
    {"title": "Spirited Away", "year": 2001, "director": "Hayao Miyazaki"},
    {"title": "Inglorious Bastards", "year": 2009, "director": "Quentin Tarantino"},
    {"title": "Goodfellas", "year": 1990, "director": "Martin Scorcese"},
    {"title": "The Godfather", "year": 1972, "director": "Francis Ford Coppola"}
  ]);

  public movies= this._movies.asReadonly();

  private _favourites=signal<string[]>([]);

  public favourites= this._favourites.asReadonly();

  public deleteFav(index:number){
    this._favourites.update(favourites =>
      favourites.filter((_, i) => i !==index)
    );
  }

  public addFav(fav:string){
    this._favourites.update(current => [...current, fav]);
  }
}
