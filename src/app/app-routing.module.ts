
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), },
  { path: 'page', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),  canActivate: [AuthGuard]},
  { path: '', redirectTo: 'page', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
