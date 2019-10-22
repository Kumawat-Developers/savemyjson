import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjsonComponent } from './myjson.component';

describe('MyjsonComponent', () => {
  let component: MyjsonComponent;
  let fixture: ComponentFixture<MyjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
