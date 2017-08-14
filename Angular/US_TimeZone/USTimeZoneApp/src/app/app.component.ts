import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US TIME ZONE DISPLAY';
  bool: boolean = false;
  currentTime = new Date();

  converted = function convert(){
      var newDate = "abc";
      return newDate;
  }


}
