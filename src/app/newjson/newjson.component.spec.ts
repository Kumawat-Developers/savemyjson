import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjsonComponent } from './newjson.component';

describe('NewjsonComponent', () => {
  let component: NewjsonComponent;
  let fixture: ComponentFixture<NewjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
