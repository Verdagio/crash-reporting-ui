import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashItemComponent } from './crash-item.component';

describe('CrashItemComponent', () => {
  let component: CrashItemComponent;
  let fixture: ComponentFixture<CrashItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
