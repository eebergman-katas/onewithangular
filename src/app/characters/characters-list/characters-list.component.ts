import { Component, OnInit } from '@angular/core';
import { Character } from '../../core';
import { CharacterService } from '../character.service';


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
    this.charService.fetchCharacters()
      .subscribe(char => this.chars.push(...char));
  }
}
