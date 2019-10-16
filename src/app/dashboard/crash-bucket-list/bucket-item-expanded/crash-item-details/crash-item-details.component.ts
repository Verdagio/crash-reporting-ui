import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { CrashItem } from '../crash-item.model';
import { CrashItemService } from '../crash-item.service';
import { DataService } from 'src/app/shared/data.service';





@Component({
  selector: 'app-crash-item-details',
  templateUrl: './crash-item-details.component.html',
  styleUrls: ['./crash-item-details.component.css']
})
export class CrashItemDetailsComponent {
  @Input() crashItem: CrashItem;

  constructor(private dataService: DataService, private crashItemService: CrashItemService) { }


  onDelete(){
    this.dataService.removeCrashItemById(this.crashItem.crashId.substr(0,1), this.crashItem.crashId);
    let nextItem  = this.crashItemService.nextItem(this.crashItem.crashId);
    this.crashItem = nextItem.crashId.substr(0,1)  === this.crashItem.crashId.substr(0,1) ? nextItem : null;

  }

}
