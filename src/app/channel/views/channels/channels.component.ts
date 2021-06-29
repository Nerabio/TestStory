import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectOption } from 'src/app/shared/interfaces/select-option.interface';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SortOrder } from '../../common/enums/sort-order.enum';
import { ChannelDetail } from '../../common/interfaces/channel-detail.interface';
import { Channels } from '../../common/interfaces/channels.interface';
import { ChannelFilter } from '../../common/models/channel-filter.model';
import { Pagination } from '../../common/models/pagination.model';
import { ChannelsService } from '../../common/services/channels.service';
import { EventService } from '../../common/services/event.service';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit, OnDestroy {

  public totalCountChannel: number;
  public currentGenreId: string;
  public currentSortOrder: SortOrder;
  public channelDetails: ChannelDetail[] = [];

  private _pagination: Pagination<ChannelDetail> = new Pagination<ChannelDetail>();
  private _unSub = new Subject();

  constructor(private config: AppConfigService, private channelsService: ChannelsService,
    private eventService: EventService) { }

  ngOnInit() {
    //#region  Изменение параметров
    this.eventService.onChangeGenreId$()
      .pipe(takeUntil(this._unSub))
      .subscribe((genreID: string) => {
        this.currentGenreId = genreID;
        this._pagination.reset();
        this.loadChannels();
      });

    this.eventService.onChangeSortingOrder$()
      .pipe(takeUntil(this._unSub))
      .subscribe((sortingOrder: SortOrder) => {
        this.currentSortOrder = sortingOrder;
        this.loadChannels();
      });

    //#endregion
    this.loadChannels();
  }

  loadChannels(): void {
    this.channelsService
      .getChannels(this.getFilter(), this._pagination)
      .pipe(takeUntil(this._unSub))
      .subscribe(channels => {
        this.totalCountChannel = Number(channels.total);
        this.channelDetails = channels.channelDetails;
      });
  }

  next(): void {
    this._pagination.next();
    this.loadChannels();
  }

  getFilter(): ChannelFilter {
    const filter = new ChannelFilter();
    filter.genreID = this.currentGenreId,
    filter.sorting = this.currentSortOrder
    return filter;
  }

  ngOnDestroy(): void {
    this._unSub.next();
    this._unSub.complete();
  }
}
