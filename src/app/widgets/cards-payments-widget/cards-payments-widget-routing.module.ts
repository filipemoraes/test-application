import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsPaymentsWidgetComponent } from './cards-payments-widget.component';

const routes: Routes = [
  {
    path: '',
    component: CardsPaymentsWidgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPaymentsWidgetRoutingModule {}
