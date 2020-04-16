import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayproductComponent } from './diplayproduct.component';

describe('DiplayproductComponent', () => {
  let component: DiplayproductComponent;
  let fixture: ComponentFixture<DiplayproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
