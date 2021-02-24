import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SellserviceService {
  public server_url="https://tulasi-akka-be.herokuapp.com";
  private url=this.server_url+'/sell/sellformdetails';
  // private url1='/sell/finalcard';
  public carddetails;
  constructor(private http: HttpClient) { }

  generalsellform(details) {
    // console.log('details',details);
    return this.http.post<any>(this.url,details);
  }
  // cardcreationdetails() {
  //   return card
  //   // return this.http.get<any>(this.url1)
  // }

}
