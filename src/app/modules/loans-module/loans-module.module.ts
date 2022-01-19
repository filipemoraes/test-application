import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansModuleRoutingModule } from './loans-module-routing.module';
import { LoansModuleComponent } from './loans-module.component';


@NgModule({
  declarations: [
    LoansModuleComponent
  ],
  imports: [
    CommonModule,
    LoansModuleRoutingModule
  ]
})
export class LoansModuleModule { }
