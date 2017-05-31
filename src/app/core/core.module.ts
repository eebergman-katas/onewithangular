import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '@angular/material';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [ NavComponent ],
  declarations: [ NavComponent ]
})
export class CoreModule { }
