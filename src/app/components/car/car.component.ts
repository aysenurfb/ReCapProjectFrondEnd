import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  car1={
    CarId:1,
    BrandId:1,
    ColorId:1,
    ModelYear:2011,
    DailyPrice:1212,
    CarName:'bmw',
    Description:'alajn'
  };
  car2={
    CarId:2,
    BrandId:2,
    ColorId:2,
    ModelYear:2022,
    DailyPrice:2222,
    CarName:'wolksvagen',
    Description:'asmmwk'
  };


  cars=[
    this.car1,
    this.car2,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
