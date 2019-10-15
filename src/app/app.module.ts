import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricsComponent } from './dashboard/metrics/metrics.component';
import { CrashBucketListComponent } from './dashboard/crash-bucket-list/crash-bucket-list.component';
import { CrashBucketItemComponent } from './dashboard/crash-bucket-list/crash-bucket-item/crash-bucket-item.component';
import { CrashItemListComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item-list/crash-item-list.component';
import { CrashItemDetailsComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item-details/crash-item-details.component';
import { CrashItemComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item-list/crash-item/crash-item.component';
import { BucketItemExpandedComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/bucket-item-expanded.component';
import { CrashItemService } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item.service';
import { CrashBucketService } from './dashboard/crash-bucket-list/crash-bucket.service';

import { FilterPipe } from './filter.pipe';
import { StatisticsComponent } from './dashboard/metrics/statistics/statistics.component';
import { PieChartComponent } from './dashboard/metrics/pie-chart/pie-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricsComponent,
    CrashBucketListComponent,
    CrashBucketItemComponent,
    CrashItemListComponent,
    CrashItemDetailsComponent,
    CrashItemComponent,
    NavComponent,
    BucketItemExpandedComponent,
    FilterPipe,
    StatisticsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CrashBucketService ,
    CrashItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
