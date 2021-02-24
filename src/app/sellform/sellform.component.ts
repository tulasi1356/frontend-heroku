import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SellserviceService} from '../../services/sellservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {AngularFireStorage} from '@angular/fire/storage';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
// import {AngularFireStorageModule} from '@angular/fire/storage'
// import {AngularFireModule} from '@angular/fire'
@Component({
  selector: 'app-sellform',
  templateUrl: './sellform.component.html',
  styleUrls: ['./sellform.component.scss']
})
export class SellformComponent implements OnInit {
categories = ['Men', 'Women', 'Kids', 'Gift'];
colors = ['pink','yellow','red','green','blue','orange','white','black','brown','grey'];
public imagechoosentoupload = false
public selectedimage
public url;
filePath:String
  imagechecking: boolean;
  constructor(private fb:FormBuilder,private router:Router,private sell:SellserviceService,private snackbar: MatSnackBar,private afStorage: AngularFireStorage) { }
  sellproductform = this.fb.group({
    companyname: ['', Validators.required],
    productname: ['', Validators.required],
    category: ['', Validators.required],
    type: ['', Validators.required],
    brand: ['', Validators.required],
    color: ['', Validators.required],
    realprize: ['', Validators.required],
    discount: ['', Validators.required],
    age: ['', Validators.required],
    size:['',Validators.required],
    noofproducts:['',Validators.required],
    image:[''],
    place:['',Validators.required],
    videolink:[''],




  })

  ngOnInit(): void {

  }
  public spinnerstart=false;
  upload($event) {   
    this.spinnerstart = true; 
    this.filePath = $event.target.files[0];
    if ($event.target.files.length > 0) {
      const file = $event.target.files[0]
      this.selectedimage = $event.target.files[0]
      var reader = new FileReader();
      reader.onload = (event: any) => {
  this.spinnerstart = false; 

        this.imageloader = true;
        this.url = event.target.result;
      }
      reader.readAsDataURL(file);
    // this.imageloader=true;

    // reader.readAsDataURL(file);
   
  }
}
  downloadURL: Observable<string>;
  fb1;
  imageloader=false;

Onsubmit() {
  console.log("********")
  var n = Date.now();
    // const file = event.target.files[0];
    // const filePath = `/images`;
    // this.filePath = $event.target.files[0]
    const file = `RoomsImages/${n}`;
    const fileRef = this.afStorage.ref(file);
    const task= this.afStorage.upload(`RoomsImages/${n}`, this.filePath);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.fb1 = url;
          }
          this.sellproductform.value.image=this.fb1;
          console.log('url2',this.fb1);
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log('url1',url);
      }
    });
  console.log("form values",this.sellproductform.value);
  this.sell.carddetails=this.sellproductform.value;
this.sell.generalsellform(this.sellproductform.value).subscribe(
  data => {
    if(data==='succesful') {
      this.showSnackbar('added successfully');

    } else {
      this.showSnackbar('something wrong try again');
    }
  }
)
this.router.navigate(['/cardcreated']);
}
showSnackbar(message) {
  console.log('snckbar')
  this.snackbar.open(message, "ok", { duration: 15000 });
}
// selectFile(event) {
//   this.imagechoosentoupload = true
//   if (event.target.files.length > 0) {
//     const file = event.target.files[0]
//     this.selectedimage = event.target.files[0]
//     var reader = new FileReader();
//     reader.onload = (event: any) => {
//       this.imagechecking = true;
//       this.url = event.target.result;
//     }
//     reader.readAsDataURL(file);

//   }
// }
}
