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
  private someArray: string[];

  constructor(private charService: CharacterService) {
    this.chars = [];
    this.selectedCharacter = new Character(' ');
    this.someArray = ['Hello', ' ', ' World'];
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

  private selectCharacter(char: Character): void {
    this.selectedCharacter = char;
    console.log(this.selectedCharacter);
  }
}
