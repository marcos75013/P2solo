import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodOneComponent } from './mood-one.component';

describe('MoodOneComponent', () => {
  let component: MoodOneComponent;
  let fixture: ComponentFixture<MoodOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodOneComponent]
    });
    fixture = TestBed.createComponent(MoodOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
