import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDealsComponent } from './sub-deals.component';

describe('SubDealsComponent', () => {
  let component: SubDealsComponent;
  let fixture: ComponentFixture<SubDealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
