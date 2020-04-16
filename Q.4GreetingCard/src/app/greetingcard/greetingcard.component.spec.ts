import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingcardComponent } from './greetingcard.component';

describe('GreetingcardComponent', () => {
  let component: GreetingcardComponent;
  let fixture: ComponentFixture<GreetingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
