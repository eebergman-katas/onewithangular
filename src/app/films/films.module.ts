import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';

import { FilmsComponent } from './films.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FilmsRoutingModule
  ],
  declarations: [
    FilmsListComponent,
    FilmsDetailComponent,
    FilmsComponent
  ]
})
export class FilmsModule { }
