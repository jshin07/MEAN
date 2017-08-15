import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
  @Input() p;
  @Input() mult;
  @Input() title;

  humanP= 0;
  
  
  constructor() { }

  ngOnInit() {
    this.humanP = parseInt(this.p) * parseInt(this.mult);
  }

}
