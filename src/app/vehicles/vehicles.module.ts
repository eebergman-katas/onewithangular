import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent } from './vehicles-detail/vehicles-detail.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipsDetailComponent } from './starships-detail/starships-detail.component';

@NgModule({
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ],
  declarations: [VehiclesComponent, VehiclesListComponent, VehiclesDetailComponent, StarshipsListComponent, StarshipsDetailComponent]
})
export class VehiclesModule { }