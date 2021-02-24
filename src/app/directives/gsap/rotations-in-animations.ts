import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';
import {TweenLite} from 'gsap';
import {SteppedEase} from 'gsap';
@Directive({
  selector: '[continousrotateInAnimation]'
})
export class ContinousrotationInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    
    this.animateIn();
  }

  protected animateIn() {
    TweenLite.to(this.element.nativeElement, 5, {x:'1000px', ease:SteppedEase.config(10)});
    var  t1= this.timeline.from(this.element.nativeElement, this.duration, {opacity:'0',rotate:270,repeat:-1, ease:"back"}, this.delay);
    // TweenLite.to(this.element.nativeElement, 5, {x:'-100px', ease:SteppedEase.config(10)});
    // t1.to(this.element.nativeElement, 30, {
    //     backgroundImage:("https://s3-us-west-2.amazonaws.com/s.cdpn.io/56901/bg-clouds.png"),
    //     backgroundPosition: "-2247px 0px",
    //     // backgroundColor:"red",
    //     //autoRound:false,
    //     ease: Linear.easeNone
    // });
    // for (var i = 0; i < 4; i++){ 
    // this.timeline.set(this.element.nativeElement,{x:"+=100"},"+=" + 0.2)
    // }
    // TweenMax.to(this.element.nativeElement, this.duration, {css:{top:"100px", left:"50px", backgroundColor:"#ff0000", fontSize:"12px"}, this.delay});
    // TweenMax.to(this.element.nativeElement, this.duration, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut},this.delay);
    super.animateIn();
  }
}