import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./core/main-layout/main-layout.module').then(x => x.MainLayoutModule)
    }]
  },
  {
    path: 'admin',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    }]
  },
  {
    path: 'brands',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./brands/brands.module').then(m => m.BrandsModule)
    }]
  },
  {
    path: 'tobacco/:id',
    component: MainLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./tobacco/tobacco.module').then(m => m.TobaccoModule)
    }]
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
