import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  myapidata:any;
constructor(private mydata:HttpClient)
{
  this.mydata.get('https://reqres.in/api/users?page=2')
  .subscribe((mydata)=>this.myapidata=mydata

  );

}
  // constructor(private userlist:UserprofileService) 
  // {
  //   console.log("I am a userList-Component") 
  //   let myadrs=this.userlist.getAddress();
  //   console.log(myadrs);
  // }

  ngOnInit(): void {
  }

}
