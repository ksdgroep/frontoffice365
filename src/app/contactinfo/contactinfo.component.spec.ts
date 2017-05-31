import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfoComponent } from './contactinfo.component';

describe('ContactinfoComponent', () => {
  let component: ContactinfoComponent;
  let fixture: ComponentFixture<ContactinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
