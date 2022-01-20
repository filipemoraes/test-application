import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsWithdrawalWidgetComponent } from './cards-withdrawal-widget.component';

const routes: Routes = [
  {
    path: '',
    component: CardsWithdrawalWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsWithdrawalWidgetRoutingModule {}
