import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GkAgeComponent } from './gk-age.component';

describe('GkAgeComponent', () => {
  let component: GkAgeComponent;
  let fixture: ComponentFixture<GkAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GkAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GkAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
