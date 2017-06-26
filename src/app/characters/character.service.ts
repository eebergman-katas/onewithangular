import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';

import { Character, ConfigService } from 'app/core';

@Injectable()
export class CharacterService {
  private apiURL = `http://swapi.co/api/people/?page=`;
  private observables: any[];

  constructor(
    private http: Http,
    private configService: ConfigService,
  ) {
    this.observables = [];
  }

  public fetchCharacters(source: string): Observable<any[]> {
    return this.http
      .get(`${this.apiURL}1`)
      .map(results => results.json())
      .switchMap((json) => { // cut here
        const pages = this.getPagesCount(json);


        this.getPagesData(pages);


        return Observable
          .forkJoin(this.observables)
          .map(results => results.map((result: Response) => result.json().results))
          .map(results => [].concat(...results))
          .map(this.sortAlpha);
      });
  }

  private getPagesData(pages: number) {
    for (let i = 1; i < pages; i++) {
      this.observables.push(this.http
        .get(`${this.apiURL}${i}`));
    }
  }

  private getPagesCount(json: any): number {
    return json.count % 10 === 0
      ? json.count / 10
      : (json.count / 10) + 1;
  }

  private sortAlpha(results: any[]): any[] {
    return results.sort((a: any, b: any) => {
      if (a.name < b.name) { return -1; };
      if (a.name > b.name) { return 1; };
      return 0;
    });
  }
}
