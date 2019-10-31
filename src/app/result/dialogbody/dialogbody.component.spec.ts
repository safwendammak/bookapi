import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogbodyComponent } from './dialogbody.component';

describe('DialogbodyComponent', () => {
  let component: DialogbodyComponent;
  let fixture: ComponentFixture<DialogbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
