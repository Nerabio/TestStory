import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Channels } from '../interfaces/channels.interface';
import { EventService } from './event.service';
import { ChannelFilter } from '../models/channel-filter.model';
import { Pagination } from '../models/pagination.model';
import { ChannelDetail } from '../interfaces/channel-detail.interface';
import { ChannelBuilder } from '../models/channel-builder.model';


@Injectable()
export class ChannelsService {
  private _baseUrl = '/assets/dataSource';

  constructor(private http: HttpClient, private eventService: EventService) {
  }

  public getChannels(filter: ChannelFilter, pagination: Pagination<ChannelDetail>): Observable<Channels> {
    return this.http.get<Channels>(`${this._baseUrl}/channels.json`)
      .pipe(
        map((channels: Channels) => {

          this.eventService.extractUniqGenres(channels.channelDetails);

          channels.channelDetails = new ChannelBuilder<ChannelDetail>()
                                          .setDataSource(channels.channelDetails)
                                          .setFilter(filter)
                                          .setPagination(pagination)
                                          .build();
          return channels;
     }));
  }


}
