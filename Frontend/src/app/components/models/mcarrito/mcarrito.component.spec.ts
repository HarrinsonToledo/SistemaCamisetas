import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McarritoComponent } from './mcarrito.component';

describe('McarritoComponent', () => {
  let component: McarritoComponent;
  let fixture: ComponentFixture<McarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McarritoComponent]
    });
    fixture = TestBed.createComponent(McarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
