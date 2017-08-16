import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes
  @Output() myEvent = new EventEmitter();

  voteUp(idx){
    this.quotes[idx].vote++;
  }

  voteDown(idx){
    this.quotes[idx].vote--;
  }

  delete(idx){
    this.myEvent.emit(idx);
  }


  constructor() { }

  ngOnInit() {
  }

}
