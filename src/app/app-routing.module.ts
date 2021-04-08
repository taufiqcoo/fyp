import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'daftarpenjaga',
    loadChildren: () => import('./daftarpenjaga/daftarpenjaga.module').then( m => m.DaftarpenjagaPageModule)
  },
  {
    path: 'daftaranak',
    loadChildren: () => import('./daftaranak/daftaranak.module').then( m => m.DaftaranakPageModule)
  },
  {
    path: 'kehadiran',
    loadChildren: () => import('./kehadiran/kehadiran.module').then( m => m.KehadiranPageModule)
  },
  {
    path: 'penjaga',
    loadChildren: () => import('./penjaga/penjaga.module').then( m => m.PenjagaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
