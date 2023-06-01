import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodFourComponent } from './mood-four.component';

describe('MoodFourComponent', () => {
  let component: MoodFourComponent;
  let fixture: ComponentFixture<MoodFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodFourComponent]
    });
    fixture = TestBed.createComponent(MoodFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
