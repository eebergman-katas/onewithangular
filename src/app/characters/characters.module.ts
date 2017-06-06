import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { CharactersRoutingModule } from './characters-routing.module';

import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesDetailComponent } from './species-detail/species-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MaterialModule,
    CharactersRoutingModule
  ],
  declarations: [
    CharactersComponent,
    CharactersListComponent,
    CharactersDetailComponent,
    SpeciesListComponent,
    SpeciesDetailComponent
  ],
})
export class CharactersModule { }
