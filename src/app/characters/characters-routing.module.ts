import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from 'app/characters/characters.component';
import { CharactersListComponent } from 'app/characters/characters-list/characters-list.component';
import { CharactersDetailComponent } from 'app/characters/characters-detail/characters-detail.component';
import { SpeciesListComponent } from 'app/characters/species-list/species-list.component';
import { SpeciesDetailComponent } from 'app/characters/species-detail/species-detail.component';

const routes: Routes = [
  {
    path: '', component: CharactersComponent, children: [
      {
        path: '', component: CharactersListComponent, children: [
          {
            path: '', component: CharactersDetailComponent
          }
        ]
      },
      {
        path: 'species', component: SpeciesListComponent, children: [
          {
            path: '', component: SpeciesDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
