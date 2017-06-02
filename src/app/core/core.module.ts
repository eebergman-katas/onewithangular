import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'app/shared/shared.module';

import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
