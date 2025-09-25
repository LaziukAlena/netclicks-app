import { Component} from '@angular/core';
import { Film } from './models/film.model';
import { FILMS } from './constants/films.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  public films: Film[] = FILMS
}
