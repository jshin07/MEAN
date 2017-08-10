import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Retro Barcode Generator';
  rand: number = (Math.floor(Math.random()*6)+1);
  clrs = ['red','orange','blue', 'grey', 'green', 'purple']


}
