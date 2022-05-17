import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor() {
  }
  getAddress() {
    let addr =
    {
      area: 'ballewadi',
      pincode: 413221,
      locality: 'tower'
    };
  }
  getCompanyName()
  {
    return 'T-Systems';
  }
}
