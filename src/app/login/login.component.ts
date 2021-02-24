import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public matter = false;
  constructor(private fb: FormBuilder,private auth: AuthService,private snackbar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    },
  )
  showSnackbar(message) {
    console.log('snckbar')
    this.snackbar.open(message, "ok", { duration: 15000 });
  }
  Onsubmit() {
console.log('loginForm',this.loginForm.value);
this.auth.generallogin(this.loginForm.value).subscribe(
  data => { 
    console.log(data,'datta');
    if(data === 'password is incorrect') {
      // this.matter = data;
      this.showSnackbar('password is incorrect')
    } else if(data === 'account does not exit') {
      this.showSnackbar('signup first');
    } else {
      console.log('%c T','color:red',data);
      this.auth.username = data;
      this.router.navigate(['/home']);
      // this.showSnackbar(data);
      // this.matter = true;
    }
  }
  );
}
forgetpassword() {
  this.router.navigate(['/forgotpassword'])
}
}
