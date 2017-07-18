import { Component, OnInit, Input } from '@angular/core';

import { Character } from '../../core';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.css']
})
export class CharactersDetailComponent implements OnInit {

  @Input() char: Character;

  constructor() { }

  ngOnInit() {
  }

}
