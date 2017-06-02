import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LabelLink } from 'app/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: []
})
export class CharactersComponent {
  constructor(public router: Router) { }
}

