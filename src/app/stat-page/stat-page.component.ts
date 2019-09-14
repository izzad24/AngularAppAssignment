import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

export interface Datas{
  dateTimeStamp : string,
  price: number,
  volume: number,
  marketCap: number,
}

@Component({
  selector: 'app-stat-page',
  templateUrl: './stat-page.component.html',
  styleUrls: ['./stat-page.component.css']
})
export class StatPageComponent implements OnInit {
  currencyData : Datas[]
  maxPrice: number
  maxVolume : number
  maxCap : number

  public lineChartData: ChartDataSets[] = [
    // { data: [10, 20, 30], label: 'Series 1' },
  //  { data: [5, 30, 15], label: 'Series 2' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';


  constructor(private currencyService: DataService) { }

  ngOnInit() {

    this.currencyService.data.subscribe(value =>{
      this.currencyData = value
      let tempPrice = []
      let tempVol = []
      let tempCap = []
      let templabels = []

      for(let x of value){
        let dayData = new Date(x.dateTimeStamp).getDate()
        templabels.push(dayData.toString())
        // console.log(templabels)
        tempPrice.push(x.price)
        tempVol.push(x.volume)
        tempCap.push(x.marketCap)
      }
      this.maxPrice = Math.max.apply(null, tempPrice)
      this.maxVolume = Math.max.apply(null, tempVol)
      this.maxCap = Math.max.apply(null, tempCap)
      this.lineChartLabels = templabels.reverse()
      this.lineChartData = [
        {data: tempPrice, label: 'Price'}
      ]
      console.log(this.lineChartLabels)
      // console.log(this.lineChartData)
    })
  }

}
