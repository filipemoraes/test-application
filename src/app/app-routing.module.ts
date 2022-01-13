import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/modulea/modulea.module').then((m) => m.ModuleaModule),
  },
  {
    path: 'moduleb',
    loadChildren: () =>
      import('./modules/moduleb/moduleb.module').then((m) => m.ModulebModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
