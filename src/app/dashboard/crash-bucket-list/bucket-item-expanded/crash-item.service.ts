import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CrashItem } from './crash-item.model';

@Injectable({
  providedIn: 'root'
})
export class CrashItemService {
  crashItemSelected = new Subject<CrashItem>();
  crashItemsChanged = new Subject<CrashItem[]>();
  private crashItems: CrashItem[] = [];
  constructor() { }

  getCrashItems() {
    return this.crashItems.slice();
  }

  setCrashItems(crashItems: CrashItem[]) {
    this.crashItems = crashItems;
    this.crashItemsChanged.next(this.crashItems);
  }

  getCrashItem(index: number) {
    return this.crashItems[index];
  }


  nextItem(id: string) {
    let index;
    this.crashItems.forEach(
      (ci: CrashItem) => {
        if (ci.crashId === id) {
          index = this.crashItems.indexOf(ci);
        }
      });
    return this.crashItems[index + 1];
  }
}
