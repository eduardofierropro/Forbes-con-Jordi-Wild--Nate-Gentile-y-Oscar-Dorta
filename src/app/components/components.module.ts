import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InfluencerComponent } from './influencer/influencer.component';
import { DataService } from '../services/data.service';



@NgModule({
  declarations: [
    HomeComponent,
    CabeceraComponent,
    InfluencerComponent
  ],
  imports: [
    CommonModule
  ],
  providers : [
    DataService
  ],  
  exports : [
    HomeComponent,
    CabeceraComponent,
    InfluencerComponent
  ]
})
export class ComponentsModule { }
