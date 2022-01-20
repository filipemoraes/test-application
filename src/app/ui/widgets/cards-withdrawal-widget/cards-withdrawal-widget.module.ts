import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsWithdrawalWidgetComponent } from './cards-withdrawal-widget.component';
import { CardsWithdrawalWidgetRoutingModule } from './cards-withdrawal-widget-routing.module';

@NgModule({
  declarations: [CardsWithdrawalWidgetComponent],
  imports: [CommonModule, CardsWithdrawalWidgetRoutingModule],
  exports: [CardsWithdrawalWidgetComponent],
})
export class CardsWithdrawalWidgetModule {}
