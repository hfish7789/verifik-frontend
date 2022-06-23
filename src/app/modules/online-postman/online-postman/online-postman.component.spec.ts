import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePostmanComponent } from './online-postman.component';

describe('OnlinePostmanComponent', () => {
  let component: OnlinePostmanComponent;
  let fixture: ComponentFixture<OnlinePostmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinePostmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePostmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
