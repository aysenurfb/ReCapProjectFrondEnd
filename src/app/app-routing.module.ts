import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AllinoneComponent } from './components/allinone/allinone.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"cars", component:AllinoneComponent},
  //{path:"cars", component:CarComponent},
  {path:"cars/brand/:id", component: CarComponent },
  {path:"cars/color/:ColorId", component: CarComponent },
  {path:"colors", component:ColorComponent},
  {path:"brands", component:BrandComponent},
  {path:"customers", component:CustomerComponent},
  {path:"rentals", component:RentalComponent},
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
