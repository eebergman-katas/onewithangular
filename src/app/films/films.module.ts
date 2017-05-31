import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmsDetailComponent } from './films-detail/films-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  declarations: [FilmsListComponent, FilmsDetailComponent]
})
export class FilmsModule { }
