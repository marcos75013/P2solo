import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodThreeComponent } from './mood-three.component';

describe('MoodThreeComponent', () => {
  let component: MoodThreeComponent;
  let fixture: ComponentFixture<MoodThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodThreeComponent]
    });
    fixture = TestBed.createComponent(MoodThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
