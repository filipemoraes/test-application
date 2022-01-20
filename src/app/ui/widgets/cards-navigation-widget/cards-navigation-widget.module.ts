import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsNavigationWidgetComponent } from './cards-navigation-widget.component';

@NgModule({
  declarations: [CardsNavigationWidgetComponent],
  imports: [CommonModule, RouterModule],
  exports: [CardsNavigationWidgetComponent],
})
export class CardsNavigationWidgetModule {}
