import { Component, OnInit } from '@angular/core';

import { FilmCharacter, DataService } from '../../core';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})

export class CharactersListComponent implements OnInit {
  public title = 'Characters';
  public chars: FilmCharacter[];

  constructor(private dataService: DataService) {
    this.chars = [];
  }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.dataService.fetchSwapiResults('people/')
      .subscribe(char => this.chars.push(...char));
  }
}
