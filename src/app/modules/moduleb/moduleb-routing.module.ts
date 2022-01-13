import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentbComponent } from './components/componentb/componentb.component';

const routes: Routes = [{ path: '', component: ComponentbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulebRoutingModule {}
