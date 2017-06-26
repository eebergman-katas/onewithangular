import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Character } from 'app/core';

@Injectable()
export class CharacterService {
  private characterApiUrl = `http://swapi.co/api/people/?page=`;
  private observables: any[];

  constructor(private http: Http) {
    this.observables = [];
  }

  public fetchCharacters(): Observable<Character[]> {
    return this.http
      .get(`${this.characterApiUrl}1`)
      .map(results => results.json())
      .switchMap((json) => { return this.formatDataFromPages(json); });
  }

  private formatDataFromPages(json: any): Observable<Character[]> {
    const pages = this.getPagesCount(json);
    this.collectDataFromPages(pages);

    return Observable
      .forkJoin(this.observables)
      .map(results => results.map((result: Response) => result.json().results))
      .map(results => [].concat(...results))
      .map(this.sortByCharName);
  }

  private getPagesCount(json: any): number {
    return json.count % 10 === 0
      ? json.count / 10
      : (json.count / 10) + 1;
  }

  private collectDataFromPages(pages: number) {
    for (let i = 1; i < pages; i++) {
      this.observables.push(this.http
        .get(`${this.characterApiUrl}${i}`));
    }
  }

  private sortByCharName(results: any[]): any[] {
    return results.sort((a: any, b: any) => {
      if (a.name < b.name) { return -1; };
      if (a.name > b.name) { return 1; };
      return 0;
    });
  }
}
