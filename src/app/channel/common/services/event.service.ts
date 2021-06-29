import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SortOrder } from '../enums/sort-order.enum';
import { ChannelDetail } from '../interfaces/channel-detail.interface';
import { Genre } from '../interfaces/genre.interface';

@Injectable()
export class EventService {

  private _onChangeGenres$ = new BehaviorSubject<Genre[]>(null);
  private _onChangeSortingOrder$ = new BehaviorSubject<SortOrder>(this.localStorageService.getItem('sorting') as SortOrder);
  private _onChangeGenreId$ = new BehaviorSubject<string>(this.localStorageService.getItem('genreID'));

  constructor(private localStorageService: LocalStorageService) {
  }

  //#region  Список жанров
  public onChangeGenres$(): Observable<Genre[]> {
    return this._onChangeGenres$.asObservable();
  }

  public setGenres(genres: Genre[]): void {
    this._onChangeGenres$.next(genres);
  }

  public extractUniqGenres(channelDetail: ChannelDetail[]): void {
    const uniqGenres = this.getUniqGenres(channelDetail);
    this.setGenres(uniqGenres);
  }

  public getUniqGenres(arr: ChannelDetail[]): Genre[]  {
    let storage = new Map();
    for (let item of arr) {
      for(let i = 0; i < item.genres?.length; i++){
        if(!storage.has(item.genres[i].genreID)){
          storage.set(item.genres[i].genreID, item.genres[i]);
        }
      }
    }
    return Array.from(storage.values());
  }
  //#endregion

  //#region Выбранный жанр Ид
  public onChangeGenreId$(): Observable<string> {
    return this._onChangeGenreId$.asObservable();
  }

  public setGenreId(genreID: string): void {
    this.localStorageService.setItem('genreID', genreID);
    this._onChangeGenreId$.next(genreID);
  }
  //#endregion

  //#region Выбранный фильтр сортировки
  public onChangeSortingOrder$(): Observable<SortOrder> {
    return this._onChangeSortingOrder$.asObservable();
  }

  public setSortingOrder(sortOrder: SortOrder): void {
    this.localStorageService.setItem('sorting', sortOrder);
    this._onChangeSortingOrder$.next(sortOrder);
  }
  //#endregion
}
