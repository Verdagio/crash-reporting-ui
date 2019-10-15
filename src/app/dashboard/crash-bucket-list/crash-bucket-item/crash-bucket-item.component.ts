import { Component, Input, OnInit } from '@angular/core';
import { Bucket } from '../bucket.model';


@Component({
  selector: 'app-crash-bucket-item',
  templateUrl: './crash-bucket-item.component.html',
  styleUrls: ['./crash-bucket-item.component.css']
})
export class CrashBucketItemComponent implements OnInit {
  @Input() bucket: Bucket;

  constructor() { }

  ngOnInit(){

  }

}
