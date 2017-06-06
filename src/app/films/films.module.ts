import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FilmsRoutingModule } from './films-routing.module';

import { FilmsComponent } from './films.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FilmsRoutingModule
  ],
  declarations: [
    FilmsComponent,
    FilmsListComponent,
    FilmsDetailComponent
  ]
})
export class FilmsModule { }
