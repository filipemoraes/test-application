import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageRoutingModule } from './master-page-routing.module';
import { MasterPageComponent } from './master-page.component';
import { FooterWidgetModule } from '../../widgets/footer-widget/footer-widget.module';
import { HeaderWidgetModule } from '../../widgets/header-widget/header-widget.module';
import { NavigationWidgetModule } from '../../widgets/navigation-widget/navigation-widget.module';

@NgModule({
  declarations: [MasterPageComponent],
  imports: [
    CommonModule,
    MasterPageRoutingModule,
    FooterWidgetModule,
    HeaderWidgetModule,
    NavigationWidgetModule,
  ],
})
export class MasterPageModule {}
