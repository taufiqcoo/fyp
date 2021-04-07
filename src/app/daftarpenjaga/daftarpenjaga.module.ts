import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarpenjagaPageRoutingModule } from './daftarpenjaga-routing.module';

import { DaftarpenjagaPage } from './daftarpenjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarpenjagaPageRoutingModule
  ],
  declarations: [DaftarpenjagaPage]
})
export class DaftarpenjagaPageModule {}
