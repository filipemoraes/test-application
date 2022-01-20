import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListWidgetComponent } from './cards-list-widget.component';
import { DebitCardsComponent } from './components/debit-cards/debit-cards.component';
import { CreditCardsComponent } from './components/credit-cards/credit-cards.component';
import { CarListWidgetRoutingModule } from './cards-list-widget-routing.module';

@NgModule({
  declarations: [
    CardsListWidgetComponent,
    DebitCardsComponent,
    CreditCardsComponent,
  ],
  imports: [CommonModule, CarListWidgetRoutingModule],
  exports: [CardsListWidgetComponent],
})
export class CardsListWidgetModule {}
