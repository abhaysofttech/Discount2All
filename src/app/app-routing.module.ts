import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },
  { path: '**', redirectTo: 'home' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
