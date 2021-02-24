import {ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {TimelineMax} from 'gsap';
export class CoreAnimationDirective {
  // @Input() class = "a"
  @Input() duration = 1;
  @Input() delay = 0;

  @Output() complete: EventEmitter<null> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<null> = new EventEmitter();
  protected timeline: TimelineMax;


  constructor(protected element: ElementRef) {
    this.timeline = new TimelineMax({
        onComplete: _ => this.complete.emit(),
        onReverseComplete: _ => this.reverseComplete.emit(),
        paused:true,
        reversed:true
      });
  }
  protected animateIn() {
    if(this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }
}