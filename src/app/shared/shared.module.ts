import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

const modules = [
  RouterModule,
  MaterialModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
  declarations: []
})
export class SharedModule { }
