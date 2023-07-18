import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from 'src/app/models/carDetail';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  apiUrl = "https://localhost:7175/api/";
  constructor(private httpClient:HttpClient) { }

  getAllCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "Cars/getcardetail";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
