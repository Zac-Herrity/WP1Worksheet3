import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('week2');

protected movies = signal([
  "The Secret Life of Walter Mitty" ,
  "Fantastic Mr Fox" ,
  "Interstellar" ,
  "Goodfellas" ,
  "Heat"
]
)

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



