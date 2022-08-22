import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostLoginRoutingModule } from './post-login-routing.module';
import { PostLoginComponent } from './post-login.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { MatStyleModule } from 'src/app/mat-style.module';

@NgModule({
  declarations: [PostLoginComponent],
  imports: [
    CommonModule,
    PostLoginRoutingModule,
    SidebarModule,
    MatStyleModule,
  ],
})
export class PostLoginModule {}
