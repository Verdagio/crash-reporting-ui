import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { CrashBucketService } from '../dashboard/crash-bucket-list/crash-bucket.service';
import { CrashItemService } from '../dashboard/crash-bucket-list/bucket-item-expanded/crash-item.service';
import { Bucket } from '../dashboard/crash-bucket-list/bucket.model';
import { CrashItem } from '../dashboard/crash-bucket-list/bucket-item-expanded/crash-item.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5000'

  constructor(private http: HttpClient,private bucketService: CrashBucketService, private crashItemService: CrashItemService) { }

  fetchBuckets() {
    console.log('fetching buckets')
    return this.http.get(`${this.apiUrl}/buckets`)
    .pipe(
      map(buckets => {
        return buckets
      }),
      tap((buckets: Bucket[]) => {
        this.bucketService.setBuckets(buckets);
        this.bucketService.bucketsChanged.next(buckets);
      }))
      .subscribe();
  }

  fetchBucketByName(name: string) {
    return this.http.get(`${this.apiUrl}/buckets/${name}`)
    .subscribe();
  }
  fetchAllCrashItems(){
    return this.http.get(`${this.apiUrl}/buckets/all/items`)
      .pipe(
        tap((crashItems: CrashItem[]) => {
          this.crashItemService.setCrashItems(crashItems);
        })
      )
      .subscribe();
  }

  removeCrashItemById(bName: string, itemId: string){
    return this.http.delete(`${this.apiUrl}/buckets/${bName}/items/${itemId}`)
      .pipe(
        map(buckets => {
          return buckets
        }),
        tap((buckets:Bucket[]) => {
          this.bucketService.setBuckets(buckets);

        })
      )
      .subscribe();
  }
}
