import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import { MatStyleModule } from 'src/app/mat-style.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SidebarRoutingModule, MatStyleModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
