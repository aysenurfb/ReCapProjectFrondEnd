import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Color } from '../models/color'; 
@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:7175/api/colors/';
  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl+"getall");
  }
}
