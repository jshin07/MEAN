import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  quotes =[]
  quote = new Quote();

  onSubmit(){
    this.quotes.push(this.quote);
    this.quote = new Quote();
  }

  
  deleteQ(idx){
    console.log(idx);
    console.log(this.quotes[idx]);
    this.quotes.splice(idx, 1);
  }
}
