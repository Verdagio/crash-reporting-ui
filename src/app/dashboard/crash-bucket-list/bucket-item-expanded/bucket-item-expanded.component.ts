import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CrashItem } from './crash-item.model';
import { CrashItemService } from './crash-item.service';




@Component({
  selector: 'app-bucket-item-expanded',
  templateUrl: './bucket-item-expanded.component.html',
  styleUrls: ['./bucket-item-expanded.component.css']
})
export class BucketItemExpandedComponent implements OnInit, OnDestroy {
  selectedCrashItem: CrashItem;
  subscription: Subscription;
  bucketType: string;

  constructor(private crashItemService: CrashItemService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.bucketType = history.state.data? history.state.data.id : '';
    this.subscription = this.crashItemService.crashItemSelected
      .subscribe(
        (crashItem: CrashItem) => {
          this.selectedCrashItem = crashItem;
        }
      )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
