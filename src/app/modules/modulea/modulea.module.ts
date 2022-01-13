import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleaRoutingModule } from './modulea-routing.module';
import { ComponentaComponent } from './components/componenta/componenta.component';
import { ButtonModule } from '@filipemoraes/pattern-lib';

@NgModule({
  declarations: [ComponentaComponent],
  imports: [CommonModule, ModuleaRoutingModule, ButtonModule],
})
export class ModuleaModule {}
