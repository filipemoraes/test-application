import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardModuleComponent } from './card-module.component';

const routes: Routes = [
  {
    path: '',
    component: CardModuleComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        loadChildren: () =>
          import(
            '../../widgets/cards-list-widget/cards-list-widget.module'
          ).then((m) => m.CardsListWidgetModule),
      },
      {
        path: 'payments',
        loadChildren: () =>
          import(
            '../../widgets/cards-payments-widget/cards-payments-widget.module'
          ).then((m) => m.CardsPaymentsWidgetModule),
      },
      {
        path: 'withdrawal',
        loadChildren: () =>
          import(
            '../../widgets/cards-withdrawal-widget/cards-withdrawal-widget.module'
          ).then((m) => m.CardsWithdrawalWidgetModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardModuleRoutingModule {}
