import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrComponent } from './fr.component';

describe('FrComponent', () => {
  let component: FrComponent;
  let fixture: ComponentFixture<FrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrComponent]
    });
    fixture = TestBed.createComponent(FrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
