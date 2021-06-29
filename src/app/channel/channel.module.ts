import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsService } from './common/services/channels.service';
import { RouterModule } from '@angular/router';
import { ChannelRoutes } from './channel.routing';
import { ChannelsComponent } from './views/channels/channels.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from '../shared/components/select/select.component';
import { EventService } from './common/services/event.service';
import { NavigateComponent } from './components/navigate/navigate.component';
import { HeaderComponent } from './components/header/header.component';
import { GenreFilterComponent } from './components/genre-filter/genre-filter.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { MainComponent } from './views/main/main.component';
import { ButtonLoadMoreComponent } from './components/button-load-more/button-load-more.component';
import { PluralPipe } from '../shared/pipes/plural.pipe';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TooltipDirectiveComponent } from './components/tooltip-directive/tooltip-directive.component';
import { TooltipDirective } from './components/tooltip-directive/tooltip.directive';
import { TooltipOptionsService } from './components/tooltip-directive/options.service';
import { defaultOptions } from './components/tooltip-directive/options';
import { ChannelComponent } from './components/channel/channel.component';
import { PopoverComponent } from './components/popover/popover.component';
import { SafeResourceUrlPipe } from '../shared/pipes/safe-url.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ChannelRoutes),
    HttpClientModule
  ],
  declarations: [
    SelectComponent,
    ChannelsComponent,
    NavigateComponent,
    HeaderComponent,
    GenreFilterComponent,
    SortFilterComponent,
    MainComponent,
    ButtonLoadMoreComponent,
    PluralPipe,
    SafeResourceUrlPipe,
    TooltipComponent,
    TooltipDirectiveComponent,
    TooltipDirective,
    ChannelComponent,
    PopoverComponent
  ],
  providers: [ChannelsService, EventService,  {
    provide: TooltipOptionsService,
    useValue: defaultOptions
}]
})
export class ChannelModule { }

