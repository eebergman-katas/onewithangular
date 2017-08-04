import { Component, OnInit } from '@angular/core';

import {FilmService} from '../core/services/film.service';
import { Film } from 'app/core/models/film';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public filmsData: Film[];

  constructor(private filmService: FilmService) {
    this.filmsData = [];
  }

  ngOnInit() {
    this.getFilms();

    setTimeout(() => {
      console.log(this.filmsData);
    }, 1000);
  }

  private getFilms(): void {
    this.filmService.fetchFilms()
      .subscribe(film => this.filmsData.push(...film));
  }
}
