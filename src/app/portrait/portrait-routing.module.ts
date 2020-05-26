import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortraitPage } from './portrait.page';

const routes: Routes = [
  {
    path: '',
    component: PortraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortraitPageRoutingModule {}
