import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js'

import { Bucket } from '../../crash-bucket-list/bucket.model';
import { CrashBucketService } from '../../crash-bucket-list/crash-bucket.service';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {

  data: Bucket[];
  labels: string[];
  values: number[];
  pieChart=[];


  constructor(private crashBucketService: CrashBucketService)  { }

  ngOnInit() {

    this.data = this.crashBucketService.getBuckets();
    this.labels = this.data.map(i => i.name);
    this.values = this.data.map(i => i.items.length);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.pieChart = new Chart('chart-area', {
      type: 'doughnut',
      data: {
       labels: this.labels,
       datasets: [{
           data: this.values ,
           backgroundColor: [
               'rgba(255, 224, 99)',
               'rgba(99, 255, 180)',
               'rgba(99, 198, 255)',
               'rgba(164, 99, 255)',
               'rgba(255, 99, 143)'
           ],
           borderWidth: 0
       }]
      },
      options: {
          responsive: true,
          legend: {
            position: 'bottom'
          },
       title:{
           text:"Buckets",
           display:true
       },
       animation: {
            animationScale: true,
            animationRotate: true
          }
      }
      });

    }
  }


