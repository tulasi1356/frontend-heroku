import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';
import {TweenLite} from 'gsap';
import {Linear} from 'gsap';
@Directive({
  selector: '[movingInAnimation]'
})
export class MovingInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    
    this.animateIn();
  }

  protected animateIn() {
    var tl = new TimelineMax({repeat:-1});
    tl.to(this.element.nativeElement, 30, {
        backgroundPosition: "-2247px 0px",
        backgroundColor:'red',
        //autoRound:false,
        ease: Linear.easeNone
    });
     super.animateIn();
  }
}