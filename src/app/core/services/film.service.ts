import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/forkJoin';

import { environment } from '../../../environments/environment';
import { Film } from '../models/film';

@Injectable()
export class FilmService {
  private filmApiUrl = `${environment.apiUrl}/films/?page=`;
  private observables: any[];

  constructor(private http: Http) {
    this.observables = [];
  }

  public fetchFilms(): Observable<Film[]> {
    return this.http
      .get(`${this.filmApiUrl}1`)
      .map(results => results.json())
      .switchMap((json) => { return this.formatDataFromPages(json); });
  }

  private formatDataFromPages(json: any): Observable<Film[]> {
    const pages = this.getPagesCount(json);
    this.collectDataFromPages(pages);

    return Observable
      .forkJoin(this.observables)
      .map(results => results.map((result: Response) => result.json().results))
      .map(results => [].concat(...results))
      .map(this.sortByMovieID)
      // .map(this.formatOpeningCrawl);
  }

  private getPagesCount(json: any): number {
    return json.count % 10 === 0
      ? json.count / 10
      : (json.count / 10) + 1;
  }

  private collectDataFromPages(pages: number) {
    for (let i = 1; i < pages; i++) {
      this.observables.push(this.http
        .get(`${this.filmApiUrl}${i}`));
    }
  }

  private sortByMovieID(results: any[]): any[] {
    return results.sort((a: any, b: any) => {
      if (a.episode_id < b.episode_id) { return -1; };
      if (a.episode_id > b.episode_id) { return 1; };
      return 0;
    });
  }

  // private formatOpeningCrawl(results: any[]): any[] {
  //   return results.map((films: any) => {
  //     return films.map((film) => {
  //       film.opening_crawl.replace('↵', '\n');
  //     });
  //   });
  // }

  private formatOpeningCrawl2(results: any[]): any[] {
    return results.map((film: any[]) => {
      // film.opening_crawl.replace('↵', '\n');
    });
  }
}
