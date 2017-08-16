import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  username: string;
  score: number;


  constructor(private _httpService: HttpService){}

  getScore(){
    this._httpService.retrieveData(this.username)
    .then(user => {this.score = user.public_repos + user.followers;})
    .catch(err => {console.log(err)})

  }
}
