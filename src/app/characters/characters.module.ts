import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { CharactersRoutingModule } from './characters-routing.module';

import { CharactersComponent } from './characters.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import {CharacterService} from '../core/services/character.service';

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
    CharactersDetailComponent
  ],
  providers: [CharacterService]
})
export class CharactersModule { }
