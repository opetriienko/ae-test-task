import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffFormComponent } from './diff-form.component';

describe('DiffFormComponent', () => {
  let component: DiffFormComponent;
  let fixture: ComponentFixture<DiffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
