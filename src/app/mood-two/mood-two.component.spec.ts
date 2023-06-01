import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTwoComponent } from './mood-two.component';

describe('MoodTwoComponent', () => {
  let component: MoodTwoComponent;
  let fixture: ComponentFixture<MoodTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodTwoComponent]
    });
    fixture = TestBed.createComponent(MoodTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
