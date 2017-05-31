import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public asyncTabs: Observable<any>;

  constructor(private router: Router) {
    this.charLinks = [
      { label: 'Characters', link: '' },
      { label: 'Species', link: '/characters/species' }
    ];
    this.asyncTabs = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.asyncTabs);
      }, 1000);
    });
    this.activeLinkIndex = this.charLinks.indexOf(this.charLinks
      .find(tab => router.url.indexOf(tab.link) !== -1));
  }

  ngOnInit() {
  }

}
