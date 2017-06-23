import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';


import { NavComponent } from './nav/nav.component';
import { ConfigService } from './services/config.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent],
  providers: [ConfigService]
})
export class CoreModule { }
