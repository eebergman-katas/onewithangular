import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from 'app/films/films.component';
import { FilmsDetailComponent } from 'app/films/films-detail/films-detail.component';

const routes: Routes = [
  {
    path: '', component: FilmsComponent, children: [
      {
        path: '', component: FilmsDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
