import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PenjagaPage } from './penjaga.page';

const routes: Routes = [
  {
    path: '',
    component: PenjagaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PenjagaPageRoutingModule {}
