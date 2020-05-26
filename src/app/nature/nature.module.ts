import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaturePageRoutingModule } from './nature-routing.module';

import { NaturePage } from './nature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaturePageRoutingModule
  ],
  declarations: [NaturePage]
})
export class NaturePageModule {}
