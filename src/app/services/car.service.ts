import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Car } from '../models/car'; 
@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7175/api/";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let getAllUrl=this.apiUrl+"cars/getbydetail";
    return this.httpClient.get<ListResponseModel<Car>>(getAllUrl);
  }

  getCarsByBrandId(id: number): Observable<ListResponseModel<Car>> {
    let getCarsByBrandIdUrl = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + id;
    return this.httpClient.get<ListResponseModel<Car>>(getCarsByBrandIdUrl);
  }
}
