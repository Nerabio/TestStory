import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelModule } from './channel/channel.module';
import { LocalStorageService } from './shared/services/local-storage.service';
import { CommonModule } from '@angular/common';
import { AppConfigService } from './shared/services/app-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ChannelModule
  ],
  providers: [LocalStorageService, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
