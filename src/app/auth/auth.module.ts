import { NgModule } from "@angular/core";

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
  exports: []
})
export class AuthModule {

}