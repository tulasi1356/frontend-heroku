import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[bounceInAnimation]'
})
export class BounceInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    
    this.animateIn();
  }

  protected animateIn() {
   
    this.timeline.from(this.element.nativeElement, this.duration, {opacity:'0',y:160,x:180, ease:"back"}, this.delay);
    // TweenMax.to(this.element.nativeElement, this.duration, {css:{top:"100px", left:"50px", backgroundColor:"#ff0000", fontSize:"12px"}, this.delay});
    // TweenMax.to(this.element.nativeElement, this.duration, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut},this.delay);
    super.animateIn();
  }
}