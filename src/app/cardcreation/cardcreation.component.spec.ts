import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcreationComponent } from './cardcreation.component';

describe('CardcreationComponent', () => {
  let component: CardcreationComponent;
  let fixture: ComponentFixture<CardcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
