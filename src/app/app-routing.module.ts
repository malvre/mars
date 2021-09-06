import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'photo-list',
    loadChildren: () =>
      import('./pages/photo-list/photo-list.module').then(
        (m) => m.PhotoListPageModule
      ),
  },
  {
    path: 'photo-detail',
    loadChildren: () =>
      import('./pages/photo-detail/photo-detail.module').then(
        (m) => m.PhotoDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
