import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLoginComponent } from './post-login.component';

const routes: Routes = [
  {
    path: '',
    component: PostLoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: (): Promise<any> =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'transfer',
        loadChildren: (): Promise<any> =>
          import('./transfer/transfer.module').then(
            (module) => module.TransferModule
          ),
      },
      {
        path: 'history',
        loadChildren: (): Promise<any> =>
          import('./history/history.module').then(
            (module) => module.HistoryModule
          ),
      },
      {
        path: 'profile',
        loadChildren: (): Promise<any> =>
          import('./profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: (): Promise<any> =>
          import('./settings/settings.module').then(
            (module) => module.SettingsModule
          ),
      },
      {
        path: 'support',
        loadChildren: (): Promise<any> =>
          import('./support/support.module').then(
            (module) => module.SupportModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLoginRoutingModule {}
