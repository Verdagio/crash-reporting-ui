import { Component, OnInit, Input } from '@angular/core';
import { CrashItem } from '../../crash-item.model';
import { CrashItemService } from '../../crash-item.service';





@Component({
  selector: 'app-crash-item',
  templateUrl: './crash-item.component.html',
  styleUrls: ['./crash-item.component.css']
})
export class CrashItemComponent implements OnInit {
  @Input() crashItem: CrashItem;


  constructor(private crashItemService: CrashItemService) { }

  ngOnInit() {
  }

  onSelect(){
    this.crashItemService.crashItemSelected.next(this.crashItem);
  }


}
