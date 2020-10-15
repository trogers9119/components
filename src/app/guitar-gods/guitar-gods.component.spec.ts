import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarGodsComponent } from './guitar-gods.component';

describe('GuitarGodsComponent', () => {
  let component: GuitarGodsComponent;
  let fixture: ComponentFixture<GuitarGodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarGodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarGodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
