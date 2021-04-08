import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PenjagaPageRoutingModule } from './penjaga-routing.module';

import { PenjagaPage } from './penjaga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PenjagaPageRoutingModule
  ],
  declarations: [PenjagaPage]
})
export class PenjagaPageModule {}
