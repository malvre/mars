import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListPage } from './photo-list.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotoListPageRoutingModule {}
