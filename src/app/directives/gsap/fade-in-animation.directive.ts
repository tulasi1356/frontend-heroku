import { Directive, OnInit, OnDestroy, ViewContainerRef, ElementRef, Input, EventEmitter, ViewChild } from '@angular/core';
import { TimelineMax } from 'gsap';
import { CoreAnimationDirective } from './core-animation.directive';

@Directive({
  selector: '[fadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit() {
    // perform animation
    
    this.animateIn();
  }

  protected animateIn() {
    // console.log('.................',this.element.nativeElement.className)
    // if(this.element.nativeElement.className=='anim') {
    this.timeline.from(this.element.nativeElement, this.duration, {opacity:'0',y:100, rotation:45, ease:"Expo.easeInOut"}, this.delay);
   
    // TweenMax.from(this.element.nativeElement, 1.5, {opacity:0, delay:1});
    super.animateIn();
  }
}