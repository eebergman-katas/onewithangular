import { Component, OnInit } from '@angular/core';

import { FilmCharacter, DataService } from '../../core';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})

export class CharactersListComponent implements OnInit {
  public chars: FilmCharacter[];
  private source = 'people/';

  constructor(private dataService: DataService) {
    this.chars = [];
  }

  ngOnInit() {
    this.getCharacters();

    setTimeout(
      console.log(this.chars), 1000);
  }

  private getCharacters() {
    for (let i = 1; i < 10; i++) { // change to fetching page numbers
      this.dataService.fetchSwapiResults(this.source, i)
        .subscribe(char => this.chars.push(...char));
    }
    this.chars.map((data) => this.sortBy(this.chars, 'name'));
  }

  private sortBy(data: any[], property: string) {
    return data.sort((a: any, b: any) => {
      if (a[property] < b[property]) { return -1; };
      if (a[property] > b[property]) { return 1; };
      return 0;
    });
  }
}
