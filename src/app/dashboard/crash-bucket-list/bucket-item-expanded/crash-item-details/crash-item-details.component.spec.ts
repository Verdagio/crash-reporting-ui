import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashItemDetailsComponent } from './crash-item-details.component';

describe('CrashItemDetailsComponent', () => {
  let component: CrashItemDetailsComponent;
  let fixture: ComponentFixture<CrashItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
