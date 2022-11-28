import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-view',
    loadChildren: () =>
      import('./list-view/list-view.module').then((m) => m.ListViewPageModule),
  },
  {
    path: 'detail-view/:id',
    loadChildren: () =>
      import('./detail-view/detail-view.module').then(
        (m) => m.DetailViewPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'list-view',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
