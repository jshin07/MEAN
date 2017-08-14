import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


    user:object = {
        email: "Hello",
        name : "",
        password : ""
    }

  constructor() { }

  ngOnInit() {
  }

  valueChanged(val){
    console.log(val);
  }

  formSubmitted(){
      console.log("Form submitted");
      console.log(this.user);
  }

}
