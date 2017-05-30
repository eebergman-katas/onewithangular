import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ NavComponent ],
  declarations: [ NavComponent ]
})
export class CoreModule { }
