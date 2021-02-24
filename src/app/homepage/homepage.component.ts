import { Component, OnInit } from '@angular/core';
import {TimelineMax} from 'gsap';
import {gsap} from 'gsap';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import "./install-gsap.js";
import {ScrollTrigger} from 'gsap/all';
// import ScrollMagic from "scrollmagic";
// import { gsap, Power2, Elastic } from 'gsap/all';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // showP = true;
  constructor() { 
    
   
   
  }

  ngOnInit(): void {
    
    // console.log(document.querySelector(".selling"))
    if(document.querySelector(".selling")) {
      gsap.registerPlugin(ScrollTrigger);
      console.log(gsap.registerPlugin(ScrollTrigger))
      var tl = gsap.timeline({
        scrollTrigger:{
          trigger: ".selling",
          toggleActions:"play pause none none"

        }
      });
      
      tl.to(".selling", {
        duration: 3,
        rotation:360
        // opacity: 0.1
      });
  } else {
    console.log('doesnt exit')
  }
  }

}
