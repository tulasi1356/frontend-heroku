import { Component, OnInit } from '@angular/core';
import { SellserviceService} from '../../services/sellservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardcreation',
  templateUrl: './cardcreation.component.html',
  styleUrls: ['./cardcreation.component.scss']
})
export class CardcreationComponent implements OnInit {
public finalcarddetails;
  constructor(private router:Router,private sell:SellserviceService,private snackbar: MatSnackBar,) { }

  ngOnInit(): void {
   this.finalcarddetails = this.sell.carddetails;
   console.log("finalcarddetails",this.finalcarddetails);
  }

}
