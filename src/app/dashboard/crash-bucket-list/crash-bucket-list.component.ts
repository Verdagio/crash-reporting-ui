import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Bucket } from './bucket.model';
import { CrashBucketService } from './crash-bucket.service';


@Component({
  selector: 'app-crash-bucket-list',
  templateUrl: './crash-bucket-list.component.html',
  styleUrls: ['./crash-bucket-list.component.css']

})
export class CrashBucketListComponent implements OnInit, OnDestroy {
  crashBuckets: Bucket[];
  subsciption = new Subscription();

  constructor(private crashBucketService: CrashBucketService) { }

  ngOnInit() {
    this.subsciption = this.crashBucketService.bucketsChanged.subscribe(
      (buckets: Bucket[]) => {
        this.crashBuckets = buckets;
      }
    )
    this.crashBuckets = this.crashBucketService.getBuckets();
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }

}
