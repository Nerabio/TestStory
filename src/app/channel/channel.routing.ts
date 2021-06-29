import {Routes} from '@angular/router';
import { ChannelsComponent } from './views/channels/channels.component';
import { FirstComponent } from './views/first/first.component';
import { MainComponent } from './views/main/main.component';
import { SecondComponent } from './views/second/second.component';

export const ChannelRoutes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'channels',
        pathMatch: 'full'
      },
      {
        path: 'channels',
        component: ChannelsComponent
      },
      {
        path: 'first',
        component: FirstComponent
      },
      {
        path: 'second',
        component: SecondComponent
      }
    ]
  }];

