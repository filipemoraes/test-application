import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersModuleRoutingModule } from './transfers-module-routing.module';
import { TransfersModuleComponent } from './transfers-module.component';


@NgModule({
  declarations: [
    TransfersModuleComponent
  ],
  imports: [
    CommonModule,
    TransfersModuleRoutingModule
  ]
})
export class TransfersModuleModule { }
