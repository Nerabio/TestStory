import { Component, OnInit } from '@angular/core';
import { SelectOption } from 'src/app/shared/interfaces/select-option.interface';
import { AppConfigService } from 'src/app/shared/services/app-config.service';
import { Genre } from '../../common/interfaces/genre.interface';
import { ChannelsService } from '../../common/services/channels.service';
import { EventService } from '../../common/services/event.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss']
})
export class GenreFilterComponent implements OnInit {

  public genres: SelectOption[] = [] as SelectOption[];
  public currentGenreId: string;
  
  constructor(private config: AppConfigService, private channelsService: ChannelsService,
    private eventService: EventService) { }

  ngOnInit() {
    this.eventService.onChangeGenreId$()
    .subscribe((genreID: string) => {
      this.currentGenreId = genreID;
    });

    this.eventService.onChangeGenres$()
    .subscribe((genres: Genre[]) => {
      this.genres = genres?.map(item => { return { id: item.genreID, label: item.genreName, value: item.genreID } as SelectOption });
    });
  }

  onSelectGenre(genreID: string): void {
    this.eventService.setGenreId(genreID);
  }

}
