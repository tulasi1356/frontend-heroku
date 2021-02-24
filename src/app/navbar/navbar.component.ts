import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
// import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public userdetails;
  constructor(public auth:AuthService,private router:Router) { 
    console.log('navbar')
    }

  ngOnInit(): void {

    if(this.auth.username.length === 0 && !(this.router.url.includes('login'))) {
      this.auth.generaluserdetails().subscribe(
        data => { 
         
          this.auth.username = data;
          this.userdetails = data;
        }
      )
    } 
  }
  logout() {
    // this.auth.username = null;
    // this.userdetails = null;
    this.auth.logoutthedetails().subscribe(
      data=>{
        console.log('dataaaa',data);
        this.auth.username = data;
        this.userdetails=data;
      }
    )
  }

}
