import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public username='';
public server_url="https://tulasi-akka-be.herokuapp.com";
private url=this.server_url+'/auth/signup';
private loginurl = this.server_url+'/auth/login';
private verification = this.server_url+'/auth/verify';
public userdertails = this.server_url+'/auth/details';
public userlogout = this.server_url+'/auth/logout';
public passwordchange=this.server_url+'/auth/forgetpasword';
// public change='/auth/changinpassword';
  constructor(private http: HttpClient,) { 
    console.log('ddddddddddddd');
  }
  generalsignup(details) {
    console.log('details',details);
    return this.http.post<any>(this.url,details);
  }
  generallogin(details) {
    console.log('details',details);
    return this.http.post<any>(this.loginurl,details);
  }
  generalverification() {
    // console.log(id_va)
    console.log('hello..............');
    return this.http.get<any>(this.verification);
  }
  generaluserdetails() {
    return this.http.get<any>(this.userdertails);
  }
  logoutthedetails() {
    return this.http.get<any>(this.userlogout)
  }
  genneralpasswordchange(details) {
    return this.http.post<any>(this.passwordchange,details);

  }
  // passwordchangefunc(details) {
  //   return this.http.post<any>(this.change,details);

  // }
}
