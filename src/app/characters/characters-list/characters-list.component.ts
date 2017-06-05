import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Character } from 'app/core';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styles: []
})

export class CharactersListComponent implements OnInit {
  private api: string;
  public chars: Character[];

  constructor(private http: Http) {
    this.api = 'http://swapi.co/api/people/';
    this.chars = [];
  }

  ngOnInit() {
    this.getCharacters();

    setTimeout(() => {
    console.log(this.chars);
    }, 1000);
  }

  private getCharacters() {
    this.getCharactersFromDB()
      .subscribe(chars => this.chars = chars);
  }

  private getCharactersFromDB(): Observable<Character[]> {
    return this.http.get(this.api)
      .map((res: Response) => res.json().results);
  }
}
