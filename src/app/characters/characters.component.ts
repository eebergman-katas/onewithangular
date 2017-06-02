import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { LabelLink } from 'app/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: []
})
export class CharactersComponent implements OnInit {
  public charLinks: LabelLink[];
  public activeLinkIndex = 0;

  constructor() {
    this.charLinks = [
      { label: 'Characters', link: '' },
      { label: 'Species', link: '/characters/species' }
    ];
  }

  ngOnInit() {
  }

}
