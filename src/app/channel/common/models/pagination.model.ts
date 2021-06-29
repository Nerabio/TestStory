import { IPagination } from "../interfaces/pagination.interface";

export class Pagination<T> implements IPagination<T>{
    private readonly _nextPageCount = 12;
    private _currentPageNumber: number = 2;
    private _start: number = 0;
    private _end: number = 0;

    constructor(){}

    private _getTotalPages(dataSource: T[]): number{
      return Math.ceil(dataSource.length / this._nextPageCount)
    }

    public setCurrentPage(num: number): this {
        this._currentPageNumber = num;
        return this;
    }

    public getPages(dataSource: T[]): T[] {
        this._end = this._currentPageNumber * this._nextPageCount;
        return dataSource.slice(this._start, this._end) as T[];
    }

    public reset(): void {
        this._start = 0;
        this._end = 0;
        this._currentPageNumber = 2;
    }

    public next(): void{
        this._currentPageNumber++;
    }
}