import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'src/app/shared/interfaces/select-option.interface';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { SortOrder } from '../../common/enums/sort-order.enum';
import { ChannelsService } from '../../common/services/channels.service';
import { EventService } from '../../common/services/event.service';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent implements OnInit {

  public sortOrder: SelectOption[] = [{ id: 1, label: 'по возрастанию', value: SortOrder.Asc }, { id: 2, label: 'по убыванию', value: SortOrder.Desc }];
  public currentSortOrder: SortOrder;
  
  constructor(private config: AppConfigService, private channelsService: ChannelsService,
    private eventService: EventService) { }

  ngOnInit() {
    this.eventService.onChangeSortingOrder$()
    .subscribe((sortingOrder: SortOrder) => {
      console.log(sortingOrder);
      this.currentSortOrder = sortingOrder;
    });
  }

  

  onSelectSorting(sorting: SortOrder): void {
    this.eventService.setSortingOrder(sorting);
  }

}
