import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaftarpenjagaPage } from './daftarpenjaga.page';

const routes: Routes = [
  {
    path: '',
    component: DaftarpenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaftarpenjagaPageRoutingModule {}
