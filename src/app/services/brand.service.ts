import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand'; 
@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:7175/api/brands/getall';

  constructor(private httpClient: HttpClient) { }
  
  getBrands():Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }

}
