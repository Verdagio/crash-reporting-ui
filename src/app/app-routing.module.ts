import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BucketItemExpandedComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/bucket-item-expanded.component';
import { CrashItemListComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item-list/crash-item-list.component';
import { CrashItemDetailsComponent } from './dashboard/crash-bucket-list/bucket-item-expanded/crash-item-details/crash-item-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'buckets', component: BucketItemExpandedComponent, children: [

      {path: ':id',component: CrashItemListComponent},
      {path: ':id/:itemId', component: CrashItemDetailsComponent}
  ]},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
