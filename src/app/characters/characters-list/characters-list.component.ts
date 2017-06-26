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
  public selectedCharacter: Character;

  constructor(private charService: CharacterService) {
    this.chars = [];
    this.selectedCharacter = new Character('Default');
  }

  ngOnInit() {
    this.getCharacters();

    setTimeout(() => {
      console.log(this.chars);
    }, 1000);
  }

  private getCharacters(): void {
    this.charService.fetchCharacters()
      .subscribe(char => this.chars.push(...char));
  }

  private selectCharacter(character: Character): void {
    this.selectedCharacter = character;
    console.log(this.selectedCharacter);
  }
}
