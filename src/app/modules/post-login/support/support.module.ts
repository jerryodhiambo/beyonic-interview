import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    FaqComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
