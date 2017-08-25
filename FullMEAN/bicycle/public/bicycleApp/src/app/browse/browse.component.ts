import {Bicycle} from '../bicycle';
import {BicycleService} from '../bicycle.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  allBikes=[];
  query="";
  answer=[];


  constructor(private _bikeService: BicycleService ) { }

  ngOnInit() {
    this._bikeService.allBikes()
    .then ( data => {
      console.log(data);
      this.allBikes = data;
    })
    .catch( err => {
      console.log(err);
    })
  }

  search(){
    this.answer = this.allBikes.filter(bike =>{
      // console.log(this.query, "this is the input")
      // console.log(bike)
      // console.log(bike.title.toLowerCase().includes(this.query.toLowerCase()))
      return bike.title.toLowerCase().includes(this.query.toLowerCase())  || bike.description.toLowerCase().includes(this.query.toLowerCase())
    })
  }



}