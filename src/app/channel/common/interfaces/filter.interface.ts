import { SortOrder } from "../enums/sort-order.enum";

export interface IFilter {
    sorting?: SortOrder;
    genreID?: string;
    filterByGenre<T>(channelDetails: T[], fieldName: string): T[];
    sortByAcs<T>(channels: T[], fieldName: string): T[];
    sortByDesc<T>(channels: T[], fieldName: string): T[];
}
