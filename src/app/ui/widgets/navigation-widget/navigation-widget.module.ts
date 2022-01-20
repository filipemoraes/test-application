import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationWidgetComponent } from './navigation-widget.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationWidgetComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavigationWidgetComponent],
})
export class NavigationWidgetModule {}
