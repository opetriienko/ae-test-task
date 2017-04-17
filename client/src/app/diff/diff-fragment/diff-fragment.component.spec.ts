import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffFragmentComponent } from './diff-fragment.component';

describe('DiffFragmentComponent', () => {
  let component: DiffFragmentComponent;
  let fixture: ComponentFixture<DiffFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
