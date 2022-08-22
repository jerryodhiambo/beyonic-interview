import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('./modules/post-login/post-login.module').then(
        (m) => m.PostLoginModule
      ),
  },
  {
    path: 'auth',
    loadChildren: (): Promise<any> =>
      import('./modules/pre-login/pre-login.module').then(
        (m) => m.PreLoginModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  relativeLinkResolution: 'legacy',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
