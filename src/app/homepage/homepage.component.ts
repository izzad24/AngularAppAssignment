import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

export interface Datas{
  dateTimeStamp : string,
  price: number,
  volume: number,
  marketCap: number,
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currencyData : Datas[]
  currency : string
  maxPrice: number
  maxVolume : number
  maxCap : number

  constructor(private currencyService: DataService) { }

  ngOnInit() {
    this.currencyService.currencyName.subscribe(value =>{
      this.currency = value
    })

    this.currencyService.data.subscribe(value =>{
      this.currencyData = value
      let tempPrice = []
      let tempVol = []
      let tempCap = []
      for(let x of value){
        tempPrice.push(x.price)
        tempVol.push(x.volume)
        tempCap.push(x.marketCap)
      }
      this.maxPrice = Math.max.apply(null, tempPrice)
      this.maxVolume = Math.max.apply(null, tempVol)
      this.maxCap = Math.max.apply(null, tempCap)
      console.log("Currency Name : "+this.currency+" Max Price : "+ this.maxPrice + " MaxVol : "+this.maxVolume+" Max Cap : "+ this.maxCap)
    })
  }

}
