import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModuleRoutingModule } from './card-module-routing.module';
import { CardModuleComponent } from './card-module.component';


@NgModule({
  declarations: [
    CardModuleComponent
  ],
  imports: [
    CommonModule,
    CardModuleRoutingModule
  ]
})
export class CardModuleModule { }
