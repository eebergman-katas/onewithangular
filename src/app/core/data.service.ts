import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/switchMap';

import { Character } from 'app/core';
import { ConfigService } from './config.service';

@Injectable()
export class DataService {

  constructor(private http: Http, private configService: ConfigService) { }

  public fetchSwapiResults(source: string): Observable<any[]> {

    return this.http
      .get(`${this.configService.apiBase}${source}${this.configService.apiPage}1`)
      .map(results => results.json())
      .switchMap((json) => {
        const pages = json.count % 10 === 0
          ? json.count / 10
          : (json.count / 10) + 1;

        const observables = [];

        for (let i = 1; i < pages; i++) {
          observables.push(this.http
            .get(`${this.configService.apiBase}${source}${this.configService.apiPage}${i}`));
        }

        return Observable
          .forkJoin(observables)
          .map(results => results.map((result: Response) => result.json().results))
          .map(results => [].concat(...results))
          .map(results => results.sort((a: any, b: any) => {
            if (a.name < b.name) { return -1; };
            if (a.name > b.name) { return 1; };
            return 0;
          }))
          .do(array => console.log(array.length));
      });
  }
}
