import { Component, Input } from '@angular/core';

import { CrashItem } from '../crash-item.model';
import { CrashItemService } from '../crash-item.service';



@Component({
  selector: 'app-crash-item-details',
  templateUrl: './crash-item-details.component.html',
  styleUrls: ['./crash-item-details.component.css']
})
export class CrashItemDetailsComponent {
  @Input() crashItem: CrashItem;

  constructor(private crashItemService: CrashItemService) { }

  onDelete(){
    this.crashItemService.removeCrashItem(this.crashItem);
  }

}
