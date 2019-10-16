import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Bucket } from './bucket.model';
import { Subject, Subscription } from 'rxjs';
import { CrashItemService } from './bucket-item-expanded/crash-item.service';
import { CrashItem } from './bucket-item-expanded/crash-item.model';
import { DataService } from 'src/app/shared/data.service';



@Injectable({
  providedIn: 'root'
})
export class CrashBucketService implements OnInit, OnDestroy  {
  bucketsChanged = new Subject<Bucket[]>();
  crashBuckets: Bucket[] = [];
  subscription = new Subscription();


  constructor(private crashItemService: CrashItemService) { }

  ngOnInit(){

    this.subscription = this.crashItemService.crashItemsChanged.subscribe(
      () => {
        this.crashBuckets.forEach(bucket => {
          // bucket.size = this.getSize(bucket.name);
        });
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  getBuckets(): Bucket[] {
    return this.crashBuckets.slice();
  }

  setBuckets(buckets: Bucket[]){
    this.crashBuckets = buckets;
    this.bucketsChanged.next(this.crashBuckets);
    let items = [];
    this.crashBuckets.forEach(b => {
      items = items.concat(b.items);
    });
    this.crashItemService.setCrashItems(items);
  }

  getSize(name: string){
    return this.crashItemService.getCrashItems().filter(item => {
      return item.crashId.includes(name)
    }).length;
  }

}
