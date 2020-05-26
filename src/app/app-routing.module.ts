import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'china',
    loadChildren: () => import('./china/china.module').then( m => m.ChinaPageModule)
  },
  {
    path: 'cute',
    loadChildren: () => import('./cute/cute.module').then( m => m.CutePageModule)
  },
  {
    path: 'nature',
    loadChildren: () => import('./nature/nature.module').then( m => m.NaturePageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'portrait',
    loadChildren: () => import('./portrait/portrait.module').then( m => m.PortraitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
