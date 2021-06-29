import { SortOrder } from "../enums/sort-order.enum";
import { ChannelDetail } from "../interfaces/channel-detail.interface";
import { IFilter } from "../interfaces/filter.interface";

export class ChannelFilter implements IFilter {
  sorting?: SortOrder;
  genreID?: string;

  public filterByGenre<T>(channelDetails: T[], fieldName: string): T[] {
    return channelDetails.filter(ch => ch[fieldName]?.some(g => g.genreID == this.genreID));
  }

  public sortByAcs<T>(channels: T[], fieldName: string): T[] {
    return channels.sort((a, b) => a[fieldName] < b[fieldName] ? -1 : 1);
  }

  public sortByDesc<T>(channels: T[], fieldName: string): T[] {
    return channels.sort((a, b) => a[fieldName] > b[fieldName] ? -1 : 1);
  }
}
