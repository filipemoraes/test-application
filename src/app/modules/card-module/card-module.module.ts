import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModuleRoutingModule } from './card-module-routing.module';
import { CardModuleComponent } from './card-module.component';
import { QuickActionsWidgetModule } from '../../widgets/quick-actions-widget/quick-actions-widget.module';
import { CardsPaymentsWidgetModule } from '../../widgets/cards-payments-widget/cards-payments-widget.module';
import { CardsWithdrawalWidgetModule } from '../../widgets/cards-withdrawal-widget/cards-withdrawal-widget.module';
import { CardsListWidgetModule } from '../../widgets/cards-list-widget/cards-list-widget.module';
import { CardsNavigationWidgetModule } from '../../widgets/cards-navigation-widget/cards-navigation-widget.module';


@NgModule({
  declarations: [
    CardModuleComponent
  ],
  imports: [
    CommonModule,
    CardModuleRoutingModule,
    QuickActionsWidgetModule,
    CardsPaymentsWidgetModule,
    CardsWithdrawalWidgetModule,
    CardsListWidgetModule,
    CardsNavigationWidgetModule
  ]
})
export class CardModuleModule { }
