import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public films: string[];

  constructor() {
    this.films = [
      'A New Hope',
      'The Empire Strikes Back',
      'Return of the Jedi',
      'Phantom Menace',
      'Attack of the Clones',
      'Revenge of the Sith',
      'The Force Awakens'
    ];
  }

  ngOnInit() {
  }

}
