import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsPaymentsWidgetComponent } from './cards-payments-widget.component';
import { CardsPaymentsWidgetRoutingModule } from './cards-payments-widget-routing.module';

@NgModule({
  declarations: [CardsPaymentsWidgetComponent],
  imports: [CommonModule, CardsPaymentsWidgetRoutingModule],
  exports: [CardsPaymentsWidgetComponent],
})
export class CardsPaymentsWidgetModule {}
