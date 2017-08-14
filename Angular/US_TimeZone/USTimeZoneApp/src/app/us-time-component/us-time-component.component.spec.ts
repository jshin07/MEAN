import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTimeComponentComponent } from './us-time-component.component';

describe('UsTimeComponentComponent', () => {
  let component: UsTimeComponentComponent;
  let fixture: ComponentFixture<UsTimeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsTimeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsTimeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
