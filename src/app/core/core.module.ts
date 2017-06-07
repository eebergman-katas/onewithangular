import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';


import { NavComponent } from './nav/nav.component';
import { DataService } from 'app/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: [DataService]
})
export class CoreModule { }
