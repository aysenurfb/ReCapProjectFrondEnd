import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CardetailService} from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails:CarDetail[]=[];
  baseUrl="https://localhost:4200/Uploads/Images/";
  constructor(private carDetailService:CardetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
