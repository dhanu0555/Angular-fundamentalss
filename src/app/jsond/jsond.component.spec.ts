import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsondComponent } from './jsond.component';

describe('JsondComponent', () => {
  let component: JsondComponent;
  let fixture: ComponentFixture<JsondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsondComponent]
    });
    fixture = TestBed.createComponent(JsondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
