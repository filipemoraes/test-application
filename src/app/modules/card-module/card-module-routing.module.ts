import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModuleComponent } from './card-module.component';

const routes: Routes = [{ path: '', component: CardModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardModuleRoutingModule { }
