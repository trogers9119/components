import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TjsSubtractionComponent } from './tjs-subtraction.component';

describe('TjsSubtractionComponent', () => {
  let component: TjsSubtractionComponent;
  let fixture: ComponentFixture<TjsSubtractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TjsSubtractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TjsSubtractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
