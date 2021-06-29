import { IBuilder } from "../interfaces/builder.interface";
import { IPagination } from "../interfaces/pagination.interface";
import { IFilter } from "../interfaces/filter.interface";
import { SortOrder } from "../enums/sort-order.enum";
import { ChannelDetail } from "../interfaces/channel-detail.interface";

export class ChannelBuilder<T> {
    private _filter: IFilter;
    private _pagination: IPagination<T>;
    private _dataSource: T[];

    public setDataSource(dataSource: T[]): this {
        this._dataSource = dataSource;
        return this;
    }

    public setFilter(filter: IFilter): this {
        this._filter = filter;
        return this;
    }

    public setPagination(pagination: IPagination<T>): this {
        this._pagination = pagination;
        return this;
    }

    private _applyFilter(): this {
        if (this._filter) {
            if (this._filter.sorting === SortOrder.Asc) {
                this._filter.sortByAcs<T>(this._dataSource, 'name');
            }
            if (this._filter.sorting === SortOrder.Desc) {
                this._filter.sortByDesc<T>(this._dataSource, 'name');
            }
            if (this._filter.genreID && this._filter.genreID != 'null') {
                this._dataSource = this._filter.filterByGenre<T>(this._dataSource as T[], 'genres');
            }
        }
        return this;
    }

    private _getPages(): T[] {
        if (this._pagination) {
            return this._pagination.getPages(this._dataSource);
        }
        return this._dataSource;
    }

    build(): T[] {
        return this._applyFilter()._getPages();
    }
}