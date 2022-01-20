import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitCardsComponent } from './components/debit-cards/debit-cards.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CardsListWidgetComponent } from './cards-list-widget.component';

const routes: Routes = [
  {
    path: '',
    component: CardsListWidgetComponent,
    children: [
      {
        path: '',
        redirectTo: 'debit',
      },
      {
        path: 'debit',
        component: DebitCardsComponent,
      },
      {
        path: 'credit',
        component: CreditCardsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarListWidgetRoutingModule {}
