import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from 'app/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'films', loadChildren: 'app/films/films.module#FilmsModule' },
  { path: 'characters', loadChildren: 'app/characters/characters.module#CharactersModule' },
  { path: 'planets', loadChildren: 'app/planets/planets.module#PlanetsModule' },
  { path: 'vehicles', loadChildren: 'app/vehicles/vehicles.module#VehiclesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
