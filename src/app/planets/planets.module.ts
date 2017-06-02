import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  declarations: [PlanetsListComponent, PlanetsDetailComponent]
})
export class PlanetsModule { }
