import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { CharactersComponent } from './characters.component';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  declarations: [CharactersListComponent, CharactersDetailComponent, CharactersComponent]
})
export class CharactersModule { }
