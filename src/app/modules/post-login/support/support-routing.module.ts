import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'help',
    component: HelpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
