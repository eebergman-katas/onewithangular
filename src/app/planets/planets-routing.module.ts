import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsComponent } from 'app/planets/planets.component';
import { PlanetsListComponent } from 'app/planets/planets-list/planets-list.component';
import { PlanetsDetailComponent } from 'app/planets/planets-detail/planets-detail.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent, children: [
      { path: '', component: PlanetsListComponent, children: [
          { path: '', component: PlanetsDetailComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
