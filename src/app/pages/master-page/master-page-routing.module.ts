import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './master-page.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: 'cards',
        loadChildren: () =>
          import('../../modules/card-module/card-module.module').then(
            (m) => m.CardModuleModule
          ),
      },
      {
        path: 'transfers',
        loadChildren: () =>
          import('../../modules/transfers-module/transfers-module.module').then(
            (m) => m.TransfersModuleModule
          ),
      },
      {
        path: 'loans',
        loadChildren: () =>
          import('../../modules/loans-module/loans-module.module').then(
            (m) => m.LoansModuleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterPageRoutingModule {}
