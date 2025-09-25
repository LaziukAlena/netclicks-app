import { Component, OnInit } from '@angular/core';
import { FILMS } from '../../constants/films.constants';
import { Film } from '../../models/film.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.html',
  styleUrl: './film-page.css'
})
export class FilmPage implements OnInit {
  public films: Film[] = FILMS
  public film!: Film
  constructor(
    private route: ActivatedRoute,
    private _router: Router
  ) {

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.InitFilm(Number(id))
  }
  private InitFilm(id: number) {
    const findFilm = this.films.find(film => film.id === id)
    if (findFilm) {
      this.film = findFilm
    } else {
      this._router.navigate(['/'])
    }
  }
}
