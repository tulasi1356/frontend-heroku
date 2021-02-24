import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public matter = '';
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,private snackbar: MatSnackBar) { }
  signupForm = this.fb.group(
    {
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatpassword: ['', [Validators.required]]
        })
 
  ngOnInit(): void {
  }
  routelogin(path) {
    this.router.navigate([path]);
  }
  Onsubmit() {
    this.auth.generalsignup(this.signupForm.value).subscribe(
      data => { 
        console.log(data,'datta');
        // this.matter = data;
        this.snackbar.open(data, "ok", { duration: 15000 });
        // this.signupLoader = false;
        // if(data.status){
        // // localStorage.setItem('forward',''); 
        // this.snackbar.open("An account verification mail is sent. Please check.","ok",{duration:20000});
        // this.router.navigate(['/login']);
      }
    );
  }
}
