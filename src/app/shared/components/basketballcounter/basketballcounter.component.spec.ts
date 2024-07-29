import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballcounterComponent } from './basketballcounter.component';

describe('BasketballcounterComponent', () => {
  let component: BasketballcounterComponent;
  let fixture: ComponentFixture<BasketballcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasketballcounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
