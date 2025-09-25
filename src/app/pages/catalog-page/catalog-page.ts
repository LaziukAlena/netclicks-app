import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS } from '../../constants/films.constants';
import { Films } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})

export class CatalogPage {
  
  constructor (
    private _filmsService: Films
  ) {}
  public get films(): Film[] {
    return this._filmsService.filteredFilms
  }

  
}
