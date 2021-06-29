import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AbstractStorage } from '../interfaces/abstract-storage.abstract';

@Injectable()
export class LocalStorageService implements AbstractStorage {

  private readonly storage: Storage;
  private readonly _prefix = 'chanel_';

  constructor() {
    this.storage = window.localStorage;
  }

  get length(): number {
    return this.storage.length;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(this._prefix + key);
  }

  hasKey(key: string): boolean {
    return this.getItem(this._prefix + key) !== null;
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    this.storage.removeItem(this._prefix + key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(this._prefix + key, value);
  }

  getObject<T>(key: string): T
  {
    let obj = {};
    try {
      const json = this.getItem(key);
      if (!json) {
        throw new Error();
      }
      obj = JSON.parse(json);
      return obj as T;
    } catch (err) {
      console.log('Error converting parameter in LocalStorageService');
      return obj as T;
    }
  }
}