import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import * as fromRoot from './../../app.reducer';
import * as UI from './../../shared/ui.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  maxDate;
  isLoading$: Observable<boolean>;

  constructor(
    private authService: AuthService, 
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.dispatch(new UI.StopLoading());
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
}
