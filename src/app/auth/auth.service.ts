import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Subject } from 'rxjs';

@Injectable( { providedIn: 'root' } )
export class AuthService {
  
  authChange = new Subject<boolean>();
  private user: User;
  
  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    // ... = spread operator, returns a new object so that original user is not manipulated
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}