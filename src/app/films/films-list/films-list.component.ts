import { Component, OnInit } from '@angular/core';
import { Movie } from 'app/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  title = 'Films';
  films: Movie[];

  constructor() { }

  ngOnInit() {
  }

}
