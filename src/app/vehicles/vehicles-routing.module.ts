import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from 'app/vehicles/vehicles.component';
import { VehiclesListComponent } from 'app/vehicles/vehicles-list/vehicles-list.component';
import { VehiclesDetailComponent } from 'app/vehicles/vehicles-detail/vehicles-detail.component';
import { StarshipsListComponent } from 'app/vehicles/starships-list/starships-list.component';
import { StarshipsDetailComponent } from 'app/vehicles/starships-detail/starships-detail.component';

const routes: Routes = [
  { path: '', component: VehiclesComponent, children: [
      { path: '', component: VehiclesListComponent, children: [
          { path: '', component: VehiclesDetailComponent }
        ]
      },
      { path: 'starships', component: StarshipsListComponent, children: [
          { path: '', component: StarshipsDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
