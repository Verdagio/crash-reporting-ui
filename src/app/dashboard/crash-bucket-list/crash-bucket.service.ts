import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Bucket } from './bucket.model';
import { Subject, Subscription } from 'rxjs';
import { CrashItemService } from './bucket-item-expanded/crash-item.service';
import { CrashItem } from './bucket-item-expanded/crash-item.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Injectable({
  providedIn: 'root'
})
export class CrashBucketService implements OnInit, OnDestroy  {
  bucketsChanged = new Subject<Bucket[]>();
  crashBuckets: Bucket[] = [
    new Bucket('C', this.getSize('C')),
    new Bucket('B', this.getSize('B')),
    new Bucket('D', this.getSize('D')),
    new Bucket('A', this.getSize('A')),
    new Bucket('E', this.getSize('E'))
  ];
  subscription = new Subscription();

  constructor(private crashItemService: CrashItemService) { }

  ngOnInit(){
    this.crashBuckets.forEach(
      (bucket: Bucket) => {
        bucket.size = this.getSize(bucket.name);
      }
    )
    this.subscription = this.crashItemService.crashItemsChanged.subscribe(
      () => {
        this.crashBuckets.forEach(bucket => {
          bucket.size = this.getSize(bucket.name);
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

  getSize(name: string){
    return this.crashItemService.getCrashItems().filter(item => {
      return item.crashId.includes(name)
    }).length;
  }
}
