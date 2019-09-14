import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Datas{
  dateTimeStamp : string,
  price: number,
  volume: number,
  marketCap: number,
}

@Injectable({
  providedIn: 'root'
},)
export class DataService {

  currencyName = new BehaviorSubject<string>("Bitcoin")
  data = new BehaviorSubject<Datas[]>([
    {
      dateTimeStamp : "Sep 13, 2019",
      price : 10360.55,
      volume: 14109864675,
      marketCap: 185809163035
    },
    {
      dateTimeStamp : "Sep 12, 2019",
      price : 10410.13,
      volume: 15323563925,
      marketCap: 186678943059
    },
    {
      dateTimeStamp : "Sep 11, 2019",
      price : 10178.37,
      volume: 15428063426,
      marketCap: 182502788242
    },
    {
      dateTimeStamp : "Sep 10, 2019",
      price : 10115.98,
      volume: 14906809639,
      marketCap: 181360731383
    },
    {
      dateTimeStamp : "Sep 9, 2019",
      price : 10334.97,
      volume: 17595943368,
      marketCap: 185263578990
    },
    {
      dateTimeStamp : "Sep 8, 2019",
      price : 10441.28,
      volume: 13670567493,
      marketCap: 187150078007
    },
    {
      dateTimeStamp : "Sep 7, 2019",
      price : 10517.25,
      volume: 15307366477,
      marketCap: 188488525926
    },
    {
      dateTimeStamp : "Sep 6, 2019",
      price : 10353.30,
      volume: 19536574783,
      marketCap: 185530405363
    },
    {
      dateTimeStamp : "Sep 5, 2019",
      price : 10575.53	,
      volume: 14551239508,
      marketCap: 189492405383
    },
    {
      dateTimeStamp : "Sep 4, 2019",
      price : 10594.49,
      volume: 16742664769,
      marketCap: 189810010608
    },
  ])

  constructor() { }
}
