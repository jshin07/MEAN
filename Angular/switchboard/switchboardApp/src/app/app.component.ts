import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';

  switch: boolean = true;

  buttonArrs = [
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true},
        {intl:"ON", value: true}
  ];

  flip(i){
      let sw = this.buttonArrs[i];
      if( sw.value == true){
          sw.value = false;
          sw.intl = "OFF";
      } else if ( sw.value == false){
          sw.value = true;
          sw.intl = "ON";
      }
    //   console.log(sw.value);
  }



}
