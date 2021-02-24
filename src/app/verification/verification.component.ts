import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {
public verify = false;
  constructor(private fb: FormBuilder,private auth: AuthService,private snackbar: MatSnackBar) {
    this.Onsubmit();

  }
  ngOnInit(): void {
  }
Onsubmit() {
  this.auth.generalverification().subscribe(
    data => {
      // console.log(data,'datta');
      this.snackbar.open(data,"ok",{duration:15000});
      if(data == "your mail is already  verified" || data=="email is verified") {
        this.verify = true;
        console.log('veified',this.verify);
      }
    }
  )
 }

  // showSnackbar(message) {
  //   console.log('snckbar')
  //   this.snackbar.open(message, "ok", { duration: 15000 });
  // }

}

