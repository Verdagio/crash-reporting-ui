import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Bucket } from '../../crash-bucket-list/bucket.model';
import { CrashItemService } from '../../crash-bucket-list/bucket-item-expanded/crash-item.service';
import { CrashBucketService } from '../../crash-bucket-list/crash-bucket.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {

  total: number;
  buckets: Bucket[];
  crashSub = new Subscription();
  bucketSub = new Subscription();

  constructor(private crashItemService: CrashItemService, private crashBucketService: CrashBucketService) { }

  ngOnInit() {
    this.total = this.crashItemService.getCrashItems().length;
    this.buckets = this.crashBucketService.getBuckets();
    this.crashSub = this.crashItemService.crashItemsChanged.subscribe(
      (items) => {
        this.total  = items.length;
      }
    );
    this.bucketSub = this.crashBucketService.bucketsChanged.subscribe(
      (items) => {
        this.buckets = items;
      }
    );
  }

  ngOnDestroy(){
    this.bucketSub.unsubscribe();
    this.crashSub.unsubscribe();
  }
}
