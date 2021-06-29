import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'channel',
    pathMatch: 'full'
  },
  {
    path: 'channel',
    loadChildren: () => import('./channel/channel.module').then(m => m.ChannelModule)
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
