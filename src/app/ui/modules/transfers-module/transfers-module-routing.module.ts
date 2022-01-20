import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfersModuleComponent } from './transfers-module.component';

const routes: Routes = [{ path: '', component: TransfersModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersModuleRoutingModule { }
