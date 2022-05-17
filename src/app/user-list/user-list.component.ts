import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userlist:UserprofileService) 
  {
    console.log("I am a userList-Component") 
    let myadrs=this.userlist.getAddress();
    console.log(myadrs);
  }

  ngOnInit(): void {
  }

}
