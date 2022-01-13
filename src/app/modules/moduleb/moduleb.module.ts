import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulebRoutingModule } from './moduleb-routing.module';
import { ComponentbComponent } from './components/componentb/componentb.component';
import { TaskListModule } from '@filipemoraes/pattern-lib';

@NgModule({
  declarations: [ComponentbComponent],
  imports: [CommonModule, ModulebRoutingModule, TaskListModule],
})
export class ModulebModule {}
