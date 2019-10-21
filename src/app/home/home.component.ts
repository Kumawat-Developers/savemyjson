import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { appModel } from '../shared/appModel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public appModel:appModel;
  constructor(private homeService:HomeService) {

    this.appModel=new appModel();
   }

  ngOnInit() {

  this.homeService.getConfig().subscribe(
    
    data=>{
      console.log(data);
      this.appModel=data;
      console.log(this.appModel.flashlight);
    }    );  
  }

}
