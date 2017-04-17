import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffResultComponent } from './diff-result.component';

describe('DiffResultComponent', () => {
  let component: DiffResultComponent;
  let fixture: ComponentFixture<DiffResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
