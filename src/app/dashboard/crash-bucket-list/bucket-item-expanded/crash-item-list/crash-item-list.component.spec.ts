import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrashItemListComponent } from './crash-item-list.component';

describe('CrashItemListComponent', () => {
  let component: CrashItemListComponent;
  let fixture: ComponentFixture<CrashItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrashItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
