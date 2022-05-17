import { Injectable } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Injectable({
  providedIn: 'root'
})
export class BaseConfigService {
url="www.something";
  constructor(private userbase: UserprofileService) {
    let base = this.userbase.getAddress();
    console.log(base);
  }
}
