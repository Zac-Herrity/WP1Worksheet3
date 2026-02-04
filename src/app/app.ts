import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { Movieservice } from './myservices/movieservice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Week3');

protected movieService = inject(Movieservice);

protected favourites =signal<string[]>([]); //empty array

//methods
protected addFave(movies:string) {
  this.favourites.update(current => [...current, movies]);
}

protected removeFave(index:number){
  this.favourites.update(favourites =>
    favourites.filter((_, i) => i!==index)
  )
}
}



