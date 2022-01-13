import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentaComponent } from './components/componenta/componenta.component';

const routes: Routes = [{ path: '', component: ComponentaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleaRoutingModule {}
