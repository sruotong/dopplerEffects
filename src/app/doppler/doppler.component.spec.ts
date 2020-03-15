import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DopplerComponent } from './doppler.component';

describe('DopplerComponent', () => {
  let component: DopplerComponent;
  let fixture: ComponentFixture<DopplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DopplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DopplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
