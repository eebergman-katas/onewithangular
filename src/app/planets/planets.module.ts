import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from 'app/core/core.module';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetsComponent } from './planets.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    PlanetsRoutingModule
  ],
  declarations: [
    PlanetsListComponent,
    PlanetsDetailComponent,
    PlanetsComponent]
})
export class PlanetsModule { }
