import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
    users: Array<Object> = [
    {name: "bob", email: "asdf@adsfds.com", password: "asdfasdf"},
    {name: "Jenny", email: "gw@asdg.com", password: "adgerah"}] 
  constructor() { }

  ngOnInit() {
  }

}
