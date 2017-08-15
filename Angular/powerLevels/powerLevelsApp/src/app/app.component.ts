import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Power Component';

  p= 1;
  powerLevel = 1;
 

  onSubmit(powerLevel){

    this.p = this.powerLevel;

  
  
  }

}
