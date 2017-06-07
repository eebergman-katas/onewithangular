import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Character } from 'app/core';

@Injectable()
export class DataService {
  private apiBase = 'http://swapi.co/api/';

  constructor(private http: Http) { }

  public fetchCharacters(): Observable<Character[]> {
    return this.http.get(`${this.apiBase}people/`)
      .map((res: Response) => res.json().results);
  }

}
