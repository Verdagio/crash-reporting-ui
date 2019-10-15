import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { CrashItem } from '../crash-item.model';
import { CrashItemService } from '../crash-item.service';





@Component({
  selector: 'app-crash-item-list',
  templateUrl: './crash-item-list.component.html',
  styleUrls: ['./crash-item-list.component.css']
})
export class CrashItemListComponent implements OnInit, OnDestroy {
  crashItems: CrashItem[] = [];
  subscription = new Subscription();
  @Input() bucketType: string;

  constructor(private crashItemService: CrashItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.crashItems = this.crashItemService.getCrashItems();
    this.subscription = this.crashItemService.crashItemsChanged.subscribe(
      (crashItems) => {
        this.crashItems = crashItems;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  // onSelect(itemId: number){
  //   this.router.navigate([`${itemId}`], {relativeTo: this.route})
  // }

}
