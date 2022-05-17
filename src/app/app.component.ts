import { Component } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondproject';
  constructor(private myUserServ: UserprofileService) {
    console.log("i am component")
    let myname = this.myUserServ.getCompanyName();
    console.log(myname);
  }
}
