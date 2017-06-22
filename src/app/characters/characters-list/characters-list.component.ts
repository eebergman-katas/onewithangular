import { Component, OnInit } from '@angular/core';
import { Character, CharacterService } from '../../core';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})

export class CharactersListComponent implements OnInit {
  public title = 'Characters';
  public chars: Character[];

  constructor(private charService: CharacterService) {
    this.chars = [];
  }

  ngOnInit() {
    this.getCharacters();
  }

  private getCharacters() {
    this.charService.fetchCharacters('people/')
      .subscribe(char => this.chars.push(...char));
  }
}
