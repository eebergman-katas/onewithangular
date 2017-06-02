import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';
import { VehiclesRoutingModule } from './vehicles-routing.module';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent } from './vehicles-detail/vehicles-detail.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VehiclesRoutingModule
  ],
  declarations: [
    VehiclesComponent,
    VehiclesListComponent,
    VehiclesDetailComponent,
    StarshipsListComponent,
    StarshipsDetailComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VehiclesModule { }
