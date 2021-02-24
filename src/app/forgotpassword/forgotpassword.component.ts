import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router} from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
public passwordapproval=false;
  constructor(private fb: FormBuilder,private auth: AuthService,private snackbar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
  }
  forgetpasswordform= this.fb.group(
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
    console.log('loginForm',this.forgetpasswordform.value);
    this.auth.genneralpasswordchange(this.forgetpasswordform.value).subscribe(
      data => { 
        console.log(data,'datta');
        if(data === 'doesnot exist') {
          this.showSnackbar('signupfirst')
        } else if(data === 'exists') {
          // this.passwordapproval = true;
          this.router.navigate(['/login']);

        } else {
          this.showSnackbar('check your mail')
        }
      }
      );
    }
}
