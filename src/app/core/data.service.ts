import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concat';

import { FilmCharacter } from 'app/core';
import { ConfigService } from './config.service';

@Injectable()
export class DataService {

  constructor(private http: Http, private configService: ConfigService) {
  }

  public fetchSwapiResults(source: string, page: number): Observable<any[]> {
    return this.http.get(`${this.configService.apiBase}${source}${this.configService.apiPage}${page}`)
      .map((res: Response) => res.json().results);
      // .map((data) => this.sortBy(data, 'name'));
  }

 

}
