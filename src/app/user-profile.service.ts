import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  public user: User;

  constructor() {
    console.log('===================>>>> UserProfileService constructor')
   }

   get name() {
     return this.user ? this.user.fullname : '';
   }

   isSessionOpen() : boolean {
     return this.user ? true : false;
   }

   logout() {
     this.user = undefined
   }
}
