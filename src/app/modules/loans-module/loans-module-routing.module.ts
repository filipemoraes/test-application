import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoansModuleComponent } from './loans-module.component';

const routes: Routes = [{ path: '', component: LoansModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansModuleRoutingModule { }
